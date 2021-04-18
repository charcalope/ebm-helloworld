import './styles/index.css';
import './styles/Dashboard.css';
import menu from './assets/DashboardMenu.png';
import {Link} from 'react-router-dom';
import dashboardIcon from './assets/DashboardIcon.svg';
import whaticon from './assets/GuyonLaptop.png';

import React, {useState} from 'react'

import SavedArticleCard from './components/SavedArticleCard';
import AnnotatedArticleCard from './components/AnnotatedArticleCard';

export default function Dashboard(props) {
    const [tabNum, setTabNum] = useState(1);

    const styledMenuItem = () => {
        switch (tabNum) {
            case 2:
                return (
                    <div className="menu-item-container">
                        <button onClick={() =>setTabNum(1)} className="menu-item-inactive">
                            <svg width="20px" height="20px" viewBox="0 0 216 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M211.782 97.0539C215.698 97.0539 217.492 92.1548 214.509 89.6076L110.727 1.00659C109.155 -0.335534 106.845 -0.33553 105.273 1.0066L1.49109 89.6076C-1.4925 92.1548 0.301516 97.0539 4.21784 97.0539H33.6341C35.9589 97.0539 37.8435 98.9462 37.8435 101.28V188.774C37.8435 191.108 39.7281 193 42.0529 193H173.949C176.274 193 178.159 191.108 178.159 188.774V101.28C178.159 98.9462 180.043 97.0539 182.368 97.0539H211.782Z" fill="#3B9F88"/>
                            </svg>
                            <p>Dashboard</p>
                        </button>

                        <button onClick={() =>setTabNum(2)} className="menu-item-active">
                            <svg width="20px" height="20px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="white"/>
                            </svg>

                            <p>Annotations</p>
                        </button>

                        <button onClick={() =>setTabNum(3)} className="menu-item-inactive">
                        <svg width="20px" height="20px" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.2263 39.8326C63.2263 52.7526 52.7526 63.2263 39.8326 63.2263C26.9126 63.2263 16.4388 52.7526 16.4388 39.8326C16.4388 26.9126 26.9126 16.4388 39.8326 16.4388C52.7526 16.4388 63.2263 26.9126 63.2263 39.8326ZM59.7927 74.3108C53.924 77.7157 47.1059 79.6651 39.8326 79.6651C17.8336 79.6651 0 61.8315 0 39.8326C0 17.8336 17.8336 0 39.8326 0C61.8315 0 79.6651 17.8336 79.6651 39.8326C79.6651 47.6759 77.3982 54.9897 73.4838 61.1547L95.0483 81.6409C98.8457 85.2485 98.9996 91.2514 95.3921 95.0488C91.7845 98.8463 85.7816 99.0002 81.9841 95.3926L59.7927 74.3108Z" fill="white"/>
                        </svg>
                        <p>Research</p>
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="menu-item-container">
                        <button onClick={() =>setTabNum(1)}  className="menu-item-inactive">
                            <svg width="20px" height="20px" viewBox="0 0 216 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M211.782 97.0539C215.698 97.0539 217.492 92.1548 214.509 89.6076L110.727 1.00659C109.155 -0.335534 106.845 -0.33553 105.273 1.0066L1.49109 89.6076C-1.4925 92.1548 0.301516 97.0539 4.21784 97.0539H33.6341C35.9589 97.0539 37.8435 98.9462 37.8435 101.28V188.774C37.8435 191.108 39.7281 193 42.0529 193H173.949C176.274 193 178.159 191.108 178.159 188.774V101.28C178.159 98.9462 180.043 97.0539 182.368 97.0539H211.782Z" fill="#3B9F88"/>
                            </svg>
                            <p>Dashboard</p>
                        </button>

                        <button onClick={() =>setTabNum(2)} className="menu-item-inactive">
                            <svg width="20px" height="20px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="white"/>
                            </svg>

                            <p>Annotations</p>
                        </button>

                        <button onClick={() =>setTabNum(3)} className="menu-item-active">
                        <svg width="20px" height="20px" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.2263 39.8326C63.2263 52.7526 52.7526 63.2263 39.8326 63.2263C26.9126 63.2263 16.4388 52.7526 16.4388 39.8326C16.4388 26.9126 26.9126 16.4388 39.8326 16.4388C52.7526 16.4388 63.2263 26.9126 63.2263 39.8326ZM59.7927 74.3108C53.924 77.7157 47.1059 79.6651 39.8326 79.6651C17.8336 79.6651 0 61.8315 0 39.8326C0 17.8336 17.8336 0 39.8326 0C61.8315 0 79.6651 17.8336 79.6651 39.8326C79.6651 47.6759 77.3982 54.9897 73.4838 61.1547L95.0483 81.6409C98.8457 85.2485 98.9996 91.2514 95.3921 95.0488C91.7845 98.8463 85.7816 99.0002 81.9841 95.3926L59.7927 74.3108Z" fill="white"/>
                        </svg>
                        <p>Research</p>
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="menu-item-container">
                        <button onClick={() =>setTabNum(1)} className="menu-item-active">
                            <svg width="20px" height="20px" viewBox="0 0 216 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M211.782 97.0539C215.698 97.0539 217.492 92.1548 214.509 89.6076L110.727 1.00659C109.155 -0.335534 106.845 -0.33553 105.273 1.0066L1.49109 89.6076C-1.4925 92.1548 0.301516 97.0539 4.21784 97.0539H33.6341C35.9589 97.0539 37.8435 98.9462 37.8435 101.28V188.774C37.8435 191.108 39.7281 193 42.0529 193H173.949C176.274 193 178.159 191.108 178.159 188.774V101.28C178.159 98.9462 180.043 97.0539 182.368 97.0539H211.782Z" fill="#3B9F88"/>
                            </svg>
                            <p>Dashboard</p>
                        </button>

                        <button onClick={() =>setTabNum(2)} className="menu-item-inactive">
                            <svg width="20px" height="20px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="white"/>
                            </svg>

                            <p>Annotations</p>
                        </button>

                        <button onClick={() =>setTabNum(3)} className="menu-item-inactive">
                        <svg width="20px" height="20px" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.2263 39.8326C63.2263 52.7526 52.7526 63.2263 39.8326 63.2263C26.9126 63.2263 16.4388 52.7526 16.4388 39.8326C16.4388 26.9126 26.9126 16.4388 39.8326 16.4388C52.7526 16.4388 63.2263 26.9126 63.2263 39.8326ZM59.7927 74.3108C53.924 77.7157 47.1059 79.6651 39.8326 79.6651C17.8336 79.6651 0 61.8315 0 39.8326C0 17.8336 17.8336 0 39.8326 0C61.8315 0 79.6651 17.8336 79.6651 39.8326C79.6651 47.6759 77.3982 54.9897 73.4838 61.1547L95.0483 81.6409C98.8457 85.2485 98.9996 91.2514 95.3921 95.0488C91.7845 98.8463 85.7816 99.0002 81.9841 95.3926L59.7927 74.3108Z" fill="white"/>
                        </svg>
                        <p>Research</p>
                        </button>
                    </div>
                );
        }
    }

    return (
        <>
            <div className="Dashboard">
                <div className="dashboard-menu">
                    <Link to="/">
                        <div className="logo-container dashboard-logo">
                            <div className="logo"></div>
                            <div className="logo-name">PROJECT LORE</div>
                        </div>
                    </Link>

                    {styledMenuItem()}

                    <Link to="/">
                        <button className="filled-button menu-log-out"> LOG OUT </button>
                    </Link>
                    
                </div>

                {tabNum===1 && (
                    <div className="dashboard-content">
                        <div className="dashboard-header">
                            <div className="dashboard-header-text">
                                <div className="tab-label-header">
                                    <svg width="20px" height="20px" viewBox="0 0 216 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M211.782 97.0539C215.698 97.0539 217.492 92.1548 214.509 89.6076L110.727 1.00659C109.155 -0.335534 106.845 -0.33553 105.273 1.0066L1.49109 89.6076C-1.4925 92.1548 0.301516 97.0539 4.21784 97.0539H33.6341C35.9589 97.0539 37.8435 98.9462 37.8435 101.28V188.774C37.8435 191.108 39.7281 193 42.0529 193H173.949C176.274 193 178.159 191.108 178.159 188.774V101.28C178.159 98.9462 180.043 97.0539 182.368 97.0539H211.782Z" fill="#3B9F88"/>
                                    </svg>
                                    <p>Dashboard</p>
                                </div>

                                <h1>Welcome Back!</h1>
                            </div>

                            <img src={whaticon} className="header-illustration"></img>
                        </div>
                        <div className="saved-articles-section">
                            <div className="dashboard-section-header">
                                <svg width="20px" height="20px" viewBox="0 0 64 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H32H60C62.2091 0 64 1.79086 64 4V106.042C64 109.882 59.1154 111.516 56.8051 108.449L35.1949 79.7613C33.5947 77.6369 30.4053 77.6369 28.8051 79.7613L7.19494 108.449C4.8846 111.516 0 109.882 0 106.042V4Z" fill="black"/>
                                </svg>
                                <p>Saved Articles</p>
                            </div>
                            <div className="article-collection-container">
                                <div className="article-collection">
                                    <SavedArticleCard title="Article Title" author="John Doe" date="05-May-2020"/>
                                    <SavedArticleCard title="Article Title"/>
                                    <SavedArticleCard title="Article Title" author="John Doe" date="05-May-2020"/>
                                    <SavedArticleCard title="Article Title"/>
                                    <SavedArticleCard title="Article Title" author="John Doe" date="05-May-2020"/>
                                    <SavedArticleCard title="Article Title"/>
                                    <SavedArticleCard title="Article Title"/>
                                    <SavedArticleCard title="Article Title"/>
                                    <SavedArticleCard title="Article Title"/>
                                </div>
                                
                            </div>
                            <button className="see-all-option">See all articles</button>
                        </div>

                        <div className="annotations-section">
                            <div className="dashboard-section-header">
                                <svg width="20px" height="20px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="black"/>
                                </svg>
                                <p>Recent Annotations</p>
                            </div>
                            <div className="article-collection-container">
                                <div className="article-collection">
                                <AnnotatedArticleCard title="Article Title" categories={["categorycategorycategorycategory","category","category"]} lastEditedDate="05-May-2020"/>
                                </div>
                                
                            </div>
                            <button className="see-all-option">See all articles</button>
                        </div>
                    </div>
                )}
                
            </div>
        </>
    );
}