import React from "react";
import { motion } from "framer-motion";
function Products(){
    return(
        <>
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-blue-800">
            Check our awesome Products
        </motion.h1>
</div>
       
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} 
                style={{ width: 600, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/originals/2e/22/8f/2e228f3c324fe9cfdfded25264816279.png" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Engine Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 900, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://st3.depositphotos.com/6838070/17218/i/450/depositphotos_172187180-stock-photo-automatic-transmission-with-retarder-in.jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">GearBox Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 700, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1193264905/photo/differential-rear-axle-of-the-car.jpg?s=612x612&w=0&k=20&c=4qrb6ZqSbDDpJvNDlaZnn9qGz8_8PmiMGubzmUA8FZs=" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Differential Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 480, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/various-car-parts-necessary-vehicle-service_93675-61005.jpg?size=626&ext=jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Service Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 600, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/shock-absorber-car-isolated-white-background-auto-parts-spare_708636-428.jpg?size=626&ext=jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Suspension Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 600, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://ae01.alicdn.com/kf/H2b5f6bea80774f1bb0f973c46b486280y/Suitable-for-Mercedes-Benz-BENZ-ACTROS-MP4-MP5-truck-headlights-auto-parts-9608200839.jpg_640x640.jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">HeadLamps</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 700, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/plastic-bottles-from-automobile-oils-isolated-white_93675-128248.jpg?size=626&ext=jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Engine Oils</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 600, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://armoxautos.com/wp-content/uploads/2018/01/1-Brake-System.png" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Brake system parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 900, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/621370478/photo/body-car-with-no-wheel-isolated-on-white-background-3d.jpg?s=612x612&w=0&k=20&c=Y2y6vYU4mq7kyItARqhjfDOZHtcYwijM6mNtBsJGcHk=" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Body Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 500, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://www.southwesttruckandtrailerparts.co.uk/wp-content/uploads/2020/10/south-west-truck-trailer-parts-service-plymouth-devon-update2.jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Trailer Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 600, height: 500 }}  class="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1196390239/photo/engine-cooling-radiators-and-automotive-air-conditioning-compressor.jpg?s=612x612&w=0&k=20&c=tFLBlxl1XGnhkhL5npq046lwwReZqYBmIlGZyiEFLjk=" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Cooling System Parts</h1>
    </div>
    <div>
        <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}  style={{ width: 600, height: 500 }} class="h-auto max-w-full rounded-lg" src="https://www.ryansautomotive.ie/wp-content/uploads/2015/08/DSC_0937.jpg" alt=""/>
        <h1 class="text-4xl text-gray-700 font-bold md:text-xl text-center ">Sensors</h1>
    </div>
</div>


        </>
    )
}
export default Products