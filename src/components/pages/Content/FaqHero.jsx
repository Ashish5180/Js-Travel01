import React from 'react';
import { FaStream } from 'react-icons/fa'; 
import { HiOutlineMenu } from 'react-icons/hi'; 
import { IoIosArrowForward } from 'react-icons/io'; 
import { motion } from 'framer-motion';

function FaqHero() {
  return (
    <div>
      <div className="relative mx-auto flex flex-col px-6  w-screen md:h-screen  md:flex-row bg-gradient-to-r from-indigo-700 to-indigo-400 py-10">
        
        {/* Left Column */}
        <div className="mx-auto mt-10 w-full max-w-xl md:mt-36 lg:max-w-screen-xl">
          <motion.div 
            className="mb-16 lg:mb-0 lg:max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-500 mb-4 inline-block rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">INTRODUCING</p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-snug">
                An inspiring <br />
                new future for
                <span className="inline-block text-yellow-300"> Web 3.0</span>
              </h2>
              <p className="text-base text-gray-200 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita! Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex items-center mt-8">
              <a href="/" className="mr-6 inline-flex h-14 items-center justify-center rounded bg-yellow-500 px-6 font-medium text-white shadow-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out">
                Get Started
              </a>
              <a href="/" aria-label="" className="inline-flex items-center font-semibold text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Learn more
                <IoIosArrowForward className="ml-2 text-lg" />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column */}
        <div className="xl:1/2 flex h-full w-full justify-end space-x-4 overflow-hidden px-6 lg:w-2/3">
          
          {/* Col 1 */}
          <div className="flex flex-col space-y-6 md:w-72">
            <div className="-mt-5 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-100 md:block"></div>
            <motion.div 
              className="relative rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam vero illo fuga libero nihil quisquam, aspernatur sint.</p>
              <div className="mt-4 flex items-center">
                <a href="#" className="relative block">
                  <img alt="" src="/images/Bm8G0V9ytRbCalT-KOSMT.png" className="mx-auto h-12 w-12 rounded-full object-cover" />
                </a>
                <div className="ml-3 flex flex-col justify-between">
                  <span className="text-sm font-semibold text-indigo-600">Simon Lewis</span>
                  <span className="flex items-center text-xs text-gray-500">Head of marketing at Resnet</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl bg-indigo-600 p-6 shadow-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="absolute -left-2 top-0 -z-10 h-6 w-6 skew-x-[28deg] bg-indigo-600"></div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione atque officia. Lorem ipsum dolor sit amet consectetur.</p>
              <div className="mt-4 flex items-center">
                <a href="#" className="relative block">
                  <img alt="" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" className="mx-auto h-12 w-12 rounded-full object-cover" />
                </a>
                <div className="ml-3 flex flex-col justify-between">
                  <span className="text-sm font-semibold">Simon Lewis</span>
                  <span className="flex items-center text-xs">Head of marketing at Resnet</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl bg-white p-6 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam vero illo fuga libero nihil quisquam, aspernatur sint.</p>
              <div className="mt-4 flex items-center">
                <a href="#" className="relative block">
                  <img alt="" src="/images/x4vs_ucCRWYTU_yLQ6h26.png" className="mx-auto h-12 w-12 rounded-full object-cover" />
                </a>
                <div className="ml-3 flex flex-col justify-between">
                  <span className="text-sm font-semibold text-indigo-600">Simon Lewis</span>
                  <span className="flex items-center text-xs text-gray-500">Head of marketing at Resnet</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Col 2 */}
          <div className="hidden w-72 flex-col space-y-6 lg:flex">
            <div className="-mt-10 hidden h-40 flex-shrink-0 rounded-xl bg-indigo-100 md:block"></div>
            <motion.div 
              className="relative rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-sm text-gray-600">Elit. Facilis aliquam vero illo fuga libero nihil quisquam, aspernatur sint.</p>
              <div className="mt-4 flex items-center">
                <a href="#" className="relative block">
                  <img alt="" src="/images/oPf2b7fqx5xa3mo68dYHo.png" className="mx-auto h-12 w-12 rounded-full object-cover" />
                </a>
                <div className="ml-3 flex flex-col justify-between">
                  <span className="text-sm font-semibold text-indigo-600">Simon Lewis</span>
                  <span className="flex items-center text-xs text-gray-500">Head of marketing at Resnet</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative rounded-xl bg-white p-6 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam vero illo fuga libero nihil quisquam, aspernatur sint.</p>
              <div className="mt-4 flex items-center">
                <a href="#" className="relative block">
                  <img alt="" src="/images/-ytzjgg6lxK1ICPcNfXho.png" className="mx-auto h-12 w-12 rounded-full object-cover" />
                </a>
                <div className="ml-3 flex flex-col justify-between">
                  <span className="text-sm font-semibold text-indigo-600">Simon Lewis</span>
                  <span className="flex items-center text-xs text-gray-500">Head of marketing at Resnet</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqHero;
