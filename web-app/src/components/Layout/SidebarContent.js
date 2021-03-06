import React, { useEffect, useRef, useCallback } from 'react';
import FeatherIcon from 'feather-icons-react';
import SimpleBar from 'simplebar-react';
import MetisMenu from 'metismenujs';

import { Link } from 'react-router-dom';

const SidebarContent = () => {
    const ref = useRef();

    const activateParentDropdown = useCallback(item => {
        item.classList.add('active');
        const parent = item.parentElement;
        const parent2El = parent.childNodes[1];
        if (parent2El && parent2El.id !== 'side-menu') {
            parent2El.classList.add('mm-show');
        }

        if (parent) {
            parent.classList.add('mm-active');
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add('mm-show'); // ul tag

                const parent3 = parent2.parentElement; // li tag

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement; // ul
                    if (parent4) {
                        parent4.classList.add('mm-show'); // ul
                        const parent5 = parent4.parentElement;
                        if (parent5) {
                            parent5.classList.add('mm-show'); // li
                            parent5.childNodes[0].classList.add('mm-active'); // a tag
                        }
                    }
                }
            }
            scrollElement(item);
            return false;
        }
        scrollElement(item);
        return false;
    }, []);

    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
    useEffect(() => {
        const pathName = window.location.pathname;

        const initMenu = () => {
            new MetisMenu('#side-menu');
            let matchingMenuItem = null;
            const ul = document.getElementById('side-menu');
            const items = ul.getElementsByTagName('a');
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [activateParentDropdown]);

    useEffect(() => {
        ref.current.recalculate();
    });

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop;
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop =
                    currentPosition - 300;
            }
        }
    }

    return (
        <React.Fragment>
            <SimpleBar style={{ maxHeight: '100%' }} ref={ref}>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">{'MyDao Menu'} </li>
                        <li>
                            <Link to="/" className="">
                                <FeatherIcon icon="home" />
                                <span>{'Basic Info'}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="">
                                <FeatherIcon icon="book" />
                                <span>{'Proposals'}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="">
                                <FeatherIcon icon="user" />
                                <span>{'Address Book'}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment>
    );
};

SidebarContent.propTypes = {};

export default SidebarContent;
