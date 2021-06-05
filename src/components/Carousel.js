import React, { useEffect, useRef, useState } from "react";

const RenderImg = ({ img, url, index }) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-full carousel__item overflow-hidden" data-index={index}>
      <a draggable="false" href={url} className="h-full block" style={styles}></a>
    </div>
  );
};

function Carousel({ items }) {
  const carouselContainer = useRef(null);
  const carouselList = useRef(null);
  const [transformBy, setTransformBy] = useState(0);
  const [itemInView, setItemInView] = useState(0);
  const [prevItem, setPrevItem] = useState(0)
  const [nextItem, setNextItem] = useState(0)

  const [posStart, setPosStart] = useState(null)
  const [posEnd, setPosEnd] = useState(null)

  useEffect(() => {
    if(window.innerWidth > 768) {
    measureInView(Array.from(carouselList.current?.children))
  }

    window.addEventListener("resize", () => {
      if(window.innerWidth > 768) {
        measureInView(Array.from(carouselList.current?.children))
      }
    })

    // clean up
    return() => {
      window.removeEventListener("resize", () => {})
    }

  }, [])

  useEffect(async () => {
    await delay(500)
    if(window.innerWidth > 768) {
    
      measureInView(Array.from(carouselList.current.children))
      console.log("I run from useEffect")
    

}
  }, [transformBy])


  const delay = (ms) => {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, ms)
      
    })
    return promise
  }



  const measureInView = (list) => {
    const rect = carouselContainer.current.getBoundingClientRect();
    let childrenInView = list.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });

    let allChild = Array.from(carouselList.current.children)
    setItemInView(childrenInView.length)
    setPrevItem(childrenInView[0].dataset.index - 1 >= 0 ? childrenInView[0].dataset.index - 1 : 0)
    setNextItem(Number(childrenInView[childrenInView.length - 1].dataset.index) + 1 < allChild.length ? Number(childrenInView[childrenInView.length - 1].dataset.index) + 1 : allChild.length -1 )
  }



  const handlePrev = async () => {
    await delay(500)
    const rect = carouselContainer.current.getBoundingClientRect();
    let allChild = Array.from(carouselList.current.children)
    let childrenInView = allChild.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });
    
    //
    let lastItemInView = childrenInView[0].getBoundingClientRect()
    let lastItem = allChild[0].getBoundingClientRect()
    let viewToLastDiff = lastItemInView.left - lastItem.left 
    
    // get child width
    let childWidth = childrenInView[0].getBoundingClientRect().width * itemInView;

    // get extra space
    let spaceLeft =  (rect.left + 20) - allChild[prevItem].getBoundingClientRect().right
    let spaceRight = childrenInView[childrenInView.length - 1].getBoundingClientRect().right - (rect.right - 20)
    // console.table([{spaceLeft, spaceRight}]) // cosole
    let totalSpcace = (spaceLeft - spaceRight) / 2
    console.table([{spaceLeft, spaceRight, totalSpcace}]) // cosole
    let transform = childWidth + totalSpcace
    console.log("trans", transform)
    //
    console.table([{viewToLastDiff, transform}])
    if(viewToLastDiff >= transform) {
      setTransformBy(prev => prev + transform)
      console.log("asdqwe")
    }else {
      setTransformBy(0)
    }
    


  };

  const handleNext = async () => {
    await delay(500)
    const rect = carouselContainer.current.getBoundingClientRect();
    let allChild = Array.from(carouselList.current.children)
    let childrenInView = allChild.filter((child) => {
      let childRect = child.getBoundingClientRect();
      return childRect.left >= rect.left + 20 && childRect.right <= rect.right - 20;
    });
    
    //
    let lastItemInView = childrenInView[childrenInView.length - 1].getBoundingClientRect()
    let lastItem = allChild[allChild.length - 1].getBoundingClientRect()
    let viewToLastDiff = lastItem.right - lastItemInView.right
    
    // get child width
    let childWidth = childrenInView[0].getBoundingClientRect().width * itemInView;

    // get extra space
    let spaceLeft = childrenInView[0].getBoundingClientRect().left - (rect.left + 20)
    let spaceRight = (rect.right - 20) - allChild[nextItem].getBoundingClientRect().left
    // console.table([{spaceLeft, spaceRight}]) // cosole
    let totalSpcace = (spaceLeft - spaceRight) / 2
    console.table([{spaceLeft, spaceRight, totalSpcace}]) // cosole
    let transform = childWidth + totalSpcace
    console.log("trans", transform)
    //

    if(viewToLastDiff > transform) {
      setTransformBy(prev => prev - transform)
    }else {
      let LastTransform = lastItem.right - (rect.right - 20)
      setTransformBy(prev => prev - LastTransform)
    }

    
  };


  return (
    <div
      ref={carouselContainer}
      className="carousel-container w-full h-80 mx-auto relative overflow-x-scroll overflow-contain  md:px-5"
    >
      <div
        ref={carouselList}
        className="carousel__track w-full h-full flex justify-start transition-transform duration-500 ease-in-out py-4 space-x-4"
        style={{
          transform: `translate3d(${transformBy}px,0,0)`,
        }}
   
      >
        {items.map((item, index) => (
          <RenderImg key={index} img={item.image} url={item.link} index={index} />
        ))}

      </div>
      <button
        className={`absolute bg-black top-0 bottom-0 -left-1 focus:outline-none hidden md:block ${transformBy === 0 ? "md:hidden" : "md:block" }`}
        onClick={handlePrev}
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
        className={`absolute bg-black top-0 bottom-0 -right-1 focus:outline-none hidden ${nextItem === carouselList.current?.children.length - 1 ? "md:hidden" : "md:block" }`}
        onClick={handleNext}
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

export default Carousel;
