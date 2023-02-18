"use client"

import styles from "./index.module.scss"
import Image from "next/image";
import {useState} from "react";

const FaqWg = () => {

  const [collapse, setCollapse] = useState<number>(0)

  return (
    <div className="w-full flex justify-center">

      <div
        className="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[920px] xs:max-w-[540px] mt-[149px] flex justify-center items-center ">
        <div
          className="mmd:px-[12px] w-full flex mmd:flex-col md:flex-row gap-[64px] xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex-grow-1 w-full">
            <div className="font-[950] text-[50px] leading-[71px]">
              Frequently Asked Questions
            </div>
            <div className="mt-2">
              {/*=============Collapse 1*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(0)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">What is Sisu?
                    </div>
                    {collapse !== 0 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 0 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-[400] mb-1">
                    Sisu is a decentralized blockchain that powers cross-chain communication. We support cross-chain
                    token swapping (e.g. native, ERC20 or ERC721) to facilitate digital monetary transactions like
                    Bitcoin, Crypto, and other digital currencies. Sisu can support almost all modern blockchains, and
                    we are adding more and more supported tokens as we progress.

                    Our network also allows developers to interact with cross-chain contracts as if they are working on
                    the same chain to reduce time spent learning new languages and help them build their own networks.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

              {/*=============Collapse 2*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(1)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">Will there be a Sisu
                      token?
                    </div>
                    {collapse !== 1 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 1 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-normal  mb-1">
                    Yes, the token name is SISU and the distribution plan will be announced later by the development
                    team.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

              {/*=============Collapse 3*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(2)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">How many Sisu tokens
                      are there?
                    </div>
                    {collapse !== 2 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 2 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-normal  mb-1">
                    Sisu can support almost all modern blockchain but we will start with Etherem-compatible blockchains.
                    Next step is to include chains without smart contracts like Bitcoin, Litecoin, and finally, other
                    newer chains like Solana, Avalanche.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

              {/*=============Collapse 4*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(3)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">Can Sisu support
                      private transactions?
                    </div>
                    {collapse !== 3 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 3 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-normal  mb-1">
                    Though this feature is still in research mode with promising results, Sisu’s confidential
                    transaction
                    is on the later phase of our roadmap. Privacy is one of our fundamental rights and Sisu commits to
                    shield user’s transactions. This privacy is optional for each transaction on Sisu with some
                    additional
                    cost compared to unshielded ones.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

              {/*=============Collapse 5*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(4)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">How many Sisu tokens
                      are there?
                    </div>
                    {collapse !== 4 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 4 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-normal  mb-1">
                    Sisu can support almost all modern blockchain but we will start with Etherem-compatible blockchains.
                    Next step is to include chains without smart contracts like Bitcoin, Litecoin, and finally, other
                    newer chains like Solana, Avalanche.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

              {/*=============Collapse 6*=============*/}
              <div id="accordion-flush" data-accordion="collapse"
                   data-active-classes="bg-white  text-gray-900 "
                   data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                  <button type="button"
                          onClick={() => setCollapse(5)}
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  "
                          data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                          aria-controls="accordion-flush-body-1">
                    <div className="font-gordita text-[17px] text-black font-[400] leading-[24px]">Can Sisu support
                      private transactions?
                    </div>
                    {collapse !== 5 &&
                        <Image src="/images/chevron-right.svg" alt="" width={6} height={60}/>}
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className={collapse === 5 ? "" : "hidden"}
                     aria-labelledby="accordion-flush-heading-1">
                  <div className="text-[15px] font-gordita font-normal  mb-1">
                    Though this feature is still in research mode with promising results, Sisu’s confidential
                    transaction
                    is on the later phase of our roadmap. Privacy is one of our fundamental rights and Sisu commits to
                    shield user’s transactions. This privacy is optional for each transaction on Sisu with some
                    additional
                    cost compared to unshielded ones.
                  </div>
                </div>
                <div className="border-b border-gray-200"/>
              </div>

            </div>
          </div>
          <div
            className={`${styles.shadow_3} mmd:min-h-[400px]  px-[calc(1.5rem*0.5)] mx-auto flex-shrink-0 bg-[#f4f7ff] rounded-[20px] flex flex-col items-center justify-center max-w-[364px] `}>
            <Image src="/images/question-mark.svg" alt="" width={56} height={62}/>
            <div className="font-bold text-[22px] leading-[35px] text-center mt-[46px] mx-2">
              Have different questions?
            </div>
            <div className="text-[18px] leading-[175%] text-center mx-2 mt-[20px]">
              Just ask us and we will get back to you soon
            </div>
            <div
              className="bg-[#0f4fe1] rounded-full h-[68px] flex items-center justify-center px-[42px] text-white decoration-0 gap-0.5 font-gordita font-bold text-[15px] leading-normal mt-[42px]">
              <Image src="/images/mail.svg" alt="" width={19} height={14}/>
              Shoot a Direct Mail

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqWg