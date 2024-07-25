import React from 'react';
import './service.slider.css';
import { BiDoorOpen, BiTable, BiLayerMinus, BiSolidPaint } from 'react-icons/bi';
import { MdCarpenter } from 'react-icons/md';

const ServSlider = () => {
    const services = [
        {
            icon: <BiDoorOpen alt="Door Fitting Icon" className="service-icon" />,
            title: 'Door Fitting',
            description: 'We specialize in expert door fitting services to enhance the functionality and aesthetics of your space.',
        },
        {
            icon: <BiTable alt="Window Fitting Icon" className="service-icon" />,
            title: 'Window Fitting',
            description: 'Our professional team ensures precise installation of windows, providing optimal energy efficiency and style.',
        },
        {
            icon: <MdCarpenter className="service-icon" />,
            title: 'Carpentry',
            description: 'From custom furniture to intricate woodwork, our carpentry services add craftsmanship and functionality to any project.',
        },
        {
            icon: <BiLayerMinus alt="Glass Fitting Icon" className="service-icon" />,
            title: 'Glass Fitting',
            description: 'Experience seamless glass installations with our skilled technicians, ensuring safety and elegance in every project.',
        },
        {
            icon: <BiSolidPaint alt="Powder Coating Icon" className="service-icon" />,
            title: 'Powder Coating',
            description: 'Transform metal surfaces with our durable powder coating services, offering protection and a sleek finish.',
        },
    ];

    return (
        <div className="service-grid">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    {service.icon}
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServSlider;
