import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import DropdownButton from './dropdown';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown({props}) {
  const  {item1,item2,item3,item4,item5} = props;
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
            
          </Menu.Button>
        </div>

{/* Service Dropdown Start */}
        <Transition show={isDropdownOpen} as={Fragment} enter="transition ease-out duration-400" enterFrom="transform opacity-0 scale-395"  enterTo="transform opacity-100 scale-400" leave="transition ease-in duration-375"leaveFrom="transform opacity-100 scale-400" leaveTo="transform opacity-0 scale-395">

          <Menu.Items className="absolute z-10 mt-5 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

{/* Dropdown Button Start */}
            <div className="py-1">

{/* Home Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/services/home_service" ButtonName="Home Service" />
                </Menu.Item>

{/* Professiona Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/services/professional_services" ButtonName="Professional Service" />
                </Menu.Item>
                
{/* Repair Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/services/repair_service" ButtonName="Repair Service" />
                </Menu.Item>

{/* Delievery Servce button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/pages/services/delivery_service" ButtonName="Delivery Service" />
                </Menu.Item>
                
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}