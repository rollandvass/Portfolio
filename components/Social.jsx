import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaTree } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/rollandvass' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/rollandvass/' },
    { icon: <FaTree />, path: 'https://linktr.ee/rollandvass' },
]


const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link href={item.path} key={index} className={iconStyles} target='_blank'>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social