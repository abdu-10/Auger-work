import React from "react";

function Manufacturer() {
  return (
    <>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <h1 class="font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-red-600">
          Popular Manufacturers
        </h1>
      </div>
      <div class=" flex mt-20 justify-center">
        <div class="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.png"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://blog.febi.com/wp-content/uploads/2019/10/febi-logo-4C-1705.png"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://aftermarket.zf.com/go/tec/images/sharing/sharing-zf-logo-sachs-sm-fallback-1200x630.jpg"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwLm2mcImsx0wMRcnldRx-8YHkH8wzPMsKEA&usqp=CAU"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://static.wixstatic.com/media/507c88_ecc273db4425463f9ca27d3e7b8503d4~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/elring1.png"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://aftermarket.zf.com/go/tec/images/sharing/sharing-zf-logo-lemforder-sm-fallback-1200x630.jpg"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://www.mahle-aftermarket.com/media/homepage/facelift/mahle-aftermarket/mahle_r_textimage.jpg"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>
          

          
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <card class="w-full flex flex-col">
              <div class="relative">
                <a href="#">
                  <img
                    src="https://victorreinz.us/sites/default/files/victorreinz-opengraph-default.png"
                    class="w-96 h-auto"
                  />
                </a>
              </div>
            </card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manufacturer;
