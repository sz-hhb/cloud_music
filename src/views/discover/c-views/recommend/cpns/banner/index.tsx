import { memo, useRef, useState } from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector } from "@/store"
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style"
import { Carousel } from "antd"
import classNames from "classnames"
import type { ReactNode, FC, ElementRef } from "react"

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }

  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }

  // 获取背景图
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl += "?imageView&blur=40x20"
  }

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImageUrl}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            autoplay
            effect="fade"
            dots={false}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("item", {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => handlePrevClick()}
          ></button>
          <button
            className="btn right"
            onClick={() => handleNextClick()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
