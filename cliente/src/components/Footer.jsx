import FacebookButton from '../assets/images/social/facebook-white.svg'
import twitterButton from '../assets/images/social/twitter-white.svg'
import instagramButton from '../assets/images/social/instagram-white.svg'
import appStore from '../assets/images/store/app-store.svg'
import playStore from '../assets/images/store/play-store.svg'
import windowsStore from '../assets/images/store/windows-store.svg'


function Footer() {
    return (
        <div className="bg-[#1f1f1f] px-28 pb-10">
            <div className="w-full py-4">
                <ul className="flex flex-wrap items-center my-3 text-xs font-medium text-gray-300">
                    <li>
                        <a href="#" className=" hover:underline md:mr-6 ">Home    </a>
                    </li>
                    <li>
                        <a href="#" className=" hover:underline hidden md:block mr-3 ">|</a>
                    </li>
                    <li>
                        <a href="#" className=" hover:underline mr-3 ">Terms and conditions</a>
                    </li>
                    <li>
                        <a  className=" hover:underline hidden md:block md:mr-3 ">|</a>
                    </li>
                    <li>
                        <a href="#" className="over:underline mr-3">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className=" hover:underline hidden md:block md:mr-3 ">|</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline mr-3">Collection statement</a>
                    </li>
                    <li>
                        <a href="#" className=" hover:underline hidden md:block md:mr-3 ">|</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline mr-3">Help</a>
                    </li>
                    <li>
                        <a href="#" className=" hover:underline hidden md:block md:mr-3 ">|</a>
                    </li>

                    <li>
                        <a href="#" className="hover:underline">Manage Account</a>
                    </li>
                </ul>



                <span className="text-xs text-gray-500 sm:text-center">Copyrigth © 2016 DEMO Streaming All Rights Reserved.
                </span>

            </div>

            <div className="w-full mt-5  flex flex-col md:flex-row md:justify-between">
                <div className="flex space-x-3">
                    <img className='w-4' src={FacebookButton} alt="" />
                    <img className='w-7' src={twitterButton} alt="" />
                    <img className='w-7' src={instagramButton} alt="" />
                </div>

                <div className='flex h-10 items-center'>
                <img className='w-28 h-10 mr-2' src={appStore} alt="" />
                    <img className='w-28 h-10' src={playStore} alt="" />
                    <img className='w-28 h-8' src={windowsStore} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer