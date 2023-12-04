import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import DropdownButton from './button/dropdown';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  // const  {item1,item2} = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Menu>
        <div>
          <Menu.Button className='text-base'>
            Posts
          </Menu.Button>
        </div>

{/* Service Dropdown Start */}
        <Transition show={isDropdownOpen} as={Fragment} enter="transition ease-out duration-400" enterFrom="transform opacity-0 scale-395"  enterTo="transform opacity-100 scale-400" leave="transition ease-in duration-375"leaveFrom="transform opacity-100 scale-400" leaveTo="transform opacity-0 scale-395">

          <Menu.Items className="absolute z-10 mt-5 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

{/* Dropdown Button Start */}
            <div className="py-1">

{/* Home Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/posts/job" ButtonName="Work Post" />
                </Menu.Item>

{/* Professiona Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/posts/work" ButtonName="Job Post" />
                </Menu.Item>
                
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}