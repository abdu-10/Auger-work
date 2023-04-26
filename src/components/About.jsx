import React from "react";

function About(){
    return(
        <>
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <h1 class="font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-blue-600">
          About Us
        </h1>
        </div>
          
<div class="py-16 bg-white">
    <div  class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 class="text-4xl text-red-600 font-bold md:text-5xl">Who <span class="text-blue-500">We</span> <span class="text-red-600">Are</span></h1>
                <p class="text-lg">Auger autotechnik (K) Ltd is a highly-functional automotive spare parts distributorship and retailer of Original Equipment Manufacturers (OEM) equivalent products for Mercedes Trucks and vehicles BMW and Subaru in Kenya.</p>

                <p class="text-lg">Established in 2004 as a family business, we strive for excellence by operating our business in a socially, ethically and environmentally responsible manner. Since its foundation, our robust growth is a result of visionary and dynamic leadership that continues to meet our customers’ diverse needs while striving to strengthen our technical and development capabilities.</p>

                <p class="text-lg">As the automotive industry has developed, we adhere to the corporate principle of “quality first”. With this spirit and as a technology oriented corporate, we are committed to continuously enhance our technology and to provide new products and new values that delight our valued customers. This has allowed us to differentiate our business far beyond our competitors.</p>

                <p class="text-lg">Through pursuing the customers’ satisfaction and delight, we currently operate from a consolidated store with a computerized point of sales system. Also, we have managed to expand our business by opening an additional retail outlet and become a “leading motor vehicle auto parts dealer” in Kenya.</p>

                <p class="text-lg">Moving forward, the progress of economic globalization in recent years has brought rapid changes to the business environment. Auger will aim to make the leap to being an overwhelmingly dominant national auto parts supplier in the industry and will contribute to developing a prosperous society by further enhancing its community engagement while working to reinforce its already firm management structure and base..</p>
                
            </div>
            <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                
                <div class="col-span-2 row-span-4">
                    <img src="https://www.iamauger.com/Files/images/glance/Image3.jpg" class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                </div>
                
                <div class="col-span-2 row-span-2">
                    <img src="https://www.iamauger.com/Files/images/Media/Germany/Germany_Image_5.jpg" class="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
                </div>
                <div class="col-span-3 row-span-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVnKMney2rxXFexobmEp6c8kL2veKjcwE__549BxJBAlRYhyqOFG6TW3YifBtqklM9_8&usqp=CAU" class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
</div> 
      </>
    )
}
export default About