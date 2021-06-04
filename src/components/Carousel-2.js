import React, { useEffect, useRef, useState } from "react";

const RenderImg = ({ img, url, index }) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-full carousel__item flex justify-center" data-index={index}>
      <a href={url} className="w-11/12 h-full block" style={styles}></a>
    </div>
  );
};

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.carouselContainer = React.createRef()
        this.carouselList = React.createRef()
        this.state = {
            transformBy: 0,
            itemInView: 0,
            prevItem: 0,
            nextItem: 0
        }
        this.measureInView = this.measureInView.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    componentDidMount() {
        this.measureInView(Array.from(this.carouselList.current.children))

        window.addEventListener("resize", () => {
          this.measureInView(Array.from(this.carouselList.current.children))
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => {})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, "\n", this.state)
        console.log("didu")
        if(prevState.transformBy !== this.state.transformBy) {
            this.measureInView(Array.from(this.carouselList.current.children))
            console.log("I run from didUpdate")
        }
    }





  measureInView(list) {
    const rect = this.carouselContainer.current.getBoundingClientRect();
    let childrenInView = list.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });

    let allChild = Array.from(this.carouselList.current.children)
    this.setState({
        itemInView: childrenInView.length,
        prevItem: childrenInView[0].dataset.index - 1 >= 0 ? childrenInView[0].dataset.index - 1 : 0,
        nextItem: Number(childrenInView[childrenInView.length - 1].dataset.index) + 1 < allChild.length ? Number(childrenInView[childrenInView.length - 1].dataset.index) + 1 : allChild.length -1 
    })
  }



    handlePrev() {
    const rect = this.carouselContainer.current.getBoundingClientRect();
    let allChild = Array.from(this.carouselList.current.children)
    let childrenInView = allChild.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });
    
    //
    let lastItemInView = childrenInView[0].getBoundingClientRect()
    let lastItem = allChild[0].getBoundingClientRect()
    let viewToLastDiff = lastItemInView.left - lastItem.left 
    
    // get child width
    let childWidth = childrenInView[0].getBoundingClientRect().width * this.state.itemInView;

    // get extra space
    let spaceLeft =  (rect.left + 20) - allChild[this.state.prevItem].getBoundingClientRect().right
    let spaceRight = childrenInView[childrenInView.length - 1].getBoundingClientRect().right - (rect.right - 20)
    // console.table([{spaceLeft, spaceRight}]) // cosole
    let totalSpcace = (spaceLeft - spaceRight) / 2
    console.table([{spaceLeft, spaceRight, totalSpcace}]) // cosole
    let transform = childWidth + totalSpcace
    console.log("trans", transform)
    //
    console.table([{viewToLastDiff, transform}])
    if(viewToLastDiff >= transform) {
        this.setState(prev => ( {
            transformBy: prev.transformBy + transform
        }))
      console.log("asdqwe")
    }else {
      this.setState({
          transformBy: 0
      })
    }
    


  };

   handleNext() {
    const rect = this.carouselContainer.current.getBoundingClientRect();
    let allChild = Array.from(this.carouselList.current.children)

    
    
    let childrenInView = allChild.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });
    
    //
    let lastItemInView = childrenInView[childrenInView.length - 1].getBoundingClientRect()
    let lastItem = allChild[allChild.length - 1].getBoundingClientRect()
    let viewToLastDiff = lastItem.right - lastItemInView.right
    
    // get child width
    let childWidth = childrenInView[0].getBoundingClientRect().width * this.state.itemInView;

    // get extra space
    let spaceLeft = childrenInView[0].getBoundingClientRect().left - (rect.left + 20)
    let spaceRight = (rect.right - 20) - allChild[this.state.nextItem].getBoundingClientRect().left
    // console.table([{spaceLeft, spaceRight}]) // cosole
    let totalSpcace = (spaceLeft - spaceRight) / 2
    console.table([{spaceLeft, spaceRight, totalSpcace, itemInView: this.itemInView}]) // cosole
    let transform = childWidth + totalSpcace
    console.log("trans", transform)
    //

    if(viewToLastDiff > transform) {
        this.setState(prev => ({
            transformBy: prev.transformBy - transform
        }))

    }else {
      let LastTransform = lastItem.right - (rect.right - 20)
      this.setState(prev => ({
        transformBy: prev.transformBy - LastTransform
    }))
    }

    
  };

  render() {
  return (
    <div
      ref={this.carouselContainer}
      className="w-full h-80 mx-auto relative overflow-hidden px-5"
    >
      <div
        ref={this.carouselList}
        className="carousel__track w-full h-full flex justify-start transition-transform duration-500 ease-in-out"
        style={{
          transform: `translate3d(${this.state.transformBy}px,0,0)`,
        }}
      >
        {this.props.items.map((item, index) => (
          <RenderImg key={index} img={item.image} url={item.link} index={index} />
        ))}

      </div>
      <button
        className="absolute bg-black top-0 bottom-0 left-0 focus:outline-none"
        onClick={this.handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute bg-black top-0 bottom-0 right-0 focus:outline-none"
        onClick={this.handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
        }
}

export default Carousel;
