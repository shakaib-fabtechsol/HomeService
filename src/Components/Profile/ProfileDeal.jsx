import React from 'react'
import ServiceBox from './ServiceBox';
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";
import { CiSearch } from 'react-icons/ci';

const ProfileDeal = () => {
    const services = [
        {
          image: service1,
          title: "Service 1",
          price: 50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis.",
          tags: [
            { label: "Primary", type: "primary" },
            { label: "Secondary", type: "secondary" },
          ],
        },
        {
          image: service2,
          title: "Service 2",
          price: 75,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis.",
          tags: [
            { label: "New", type: "primary" },
            { label: "Popular", type: "secondary" },
          ],
        },
        {
          image: service3,
          title: "Service 3",
          price: 100,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis.",
          tags: [
            { label: "Featured", type: "primary" },
            { label: "Limited", type: "secondary" },
          ],
        },
      ];
    return (
        <div>
            <div className="mt-4">
                <div className="md:flex justify-between items-center">
                    <h2 className="text-2xl font-medium myhead">My Deals</h2>
                    <div className="flex border rounded-lg items-center px-2">
                        <label htmlFor="search">
                            <CiSearch className="me-2 text-xl" />
                        </label>
                        <input
                            id="search"
                            type="search"
                            className="py-2 w-full focus:outline-none"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <ServiceBox
                            key={index}
                            image={service.image}
                            title={service.title}
                            price={service.price}
                            description={service.description}
                            tags={service.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileDeal