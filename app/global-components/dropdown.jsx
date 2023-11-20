import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
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
            Services
          </Menu.Button>
        </div>

        <Transition
          show={isDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-400"
          enterFrom="transform opacity-0 scale-395"
          enterTo="transform opacity-100 scale-400"
          leave="transition ease-in duration-375"
          leaveFrom="transform opacity-100 scale-400"
          leaveTo="transform opacity-0 scale-395"
        >
          <Menu.Items className="absolute z-10 mt-5 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/pages/services/home_service"
                    className={classNames(
                      active ? 'bg-[#001c5e] hover:text-white hover: hover:rounded-md ' : 'text-gray-700',
                      'block px-3 py-2 text-sm'
                    )}
                  >
                    Home Service
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/pages/services/professional_services"
                    className={classNames(
                      active ? 'bg-[#001c5e] hover:text-white hover:rounded-md' : 'text-gray-700',
                      'block px-3 py-2 text-sm'
                    )}
                  >
                    Professional Service
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/pages/services/repair_service"
                    className={classNames(
                      active ? 'bg-[#001c5e] hover:text-white hover:rounded-md' : 'text-gray-700',
                      'block px-3 py-2 text-sm'
                    )}
                  >
                    Repair Service
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/pages/services/delivery_service"
                    className={classNames(
                      active ? 'bg-[#001c5e] hover:text-white hover:rounded-md' : 'text-gray-700',
                      'block px-3 py-2 text-sm'
                    )}
                  >
                    Delivery Service
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}