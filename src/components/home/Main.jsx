import React from 'react';

const Main = () => {
    return (
        <>
            <div className='text-white flex flex-col justify-center mx-auto h-[100vh] w-[60vw] '>
                <div className='flex justify-between items-center pb-7'>
                    <p className='font-semibold text-[20px]'>Country Quiz</p>
                    <button className='font-medium text-[15px] px-5 py-[6px] rounded-full bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>🏆 <span>1</span>/10 Points</button>
                </div>
                <div className='bg-[#343963] py-10 rounded-md flex flex-col items-center justify-center'>
                    {/* btns */}
                    <div className='flex items-center justify-center gap-2'>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>1</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>2</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>3</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>4</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>5</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>6</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>7</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>8</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>9</button>
                        <button className='bg-[#393f6f] rounded-full w-[3vw] h-[6vh] '>10</button>
                    </div>
                    <p className='pt-5 text-[18px]'>Which country does this flag <span></span> belongs to?</p>
                    <div className='pt-5 flex flex-col gap-3'>
                        <div className='flex items-center justify-center gap-3'>
                            <button className='px-[3vw] py-[2vh] rounded-md bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>gg</button>
                            <button className='px-[3vw] py-[2vh] rounded-md bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>gg</button>
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <button className='px-[3vw] py-[2vh] rounded-md bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>gg</button>
                            <button className='px-[3vw] py-[2vh] rounded-md bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>gg</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Main;