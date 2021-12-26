import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBtnRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='/discover'>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='/services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='/signup'>
                       Sign UP
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBtnRoute to='/signin'>
                        Sign In
                    </SideBtnRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
