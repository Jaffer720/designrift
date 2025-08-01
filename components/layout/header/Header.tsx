'use client';

import React, { useState } from 'react';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';


import Link from 'next/link';

import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';

import { ArrowUpRight } from 'lucide-react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
    // {href: '#theme-example', label: 'Examples'},
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    // { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQs' },
    { href: '#cta', label: 'CTA' },
];

function scrollToSection(id: string) {
    const el = document.querySelector(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}


export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((open) => !open);

    return (
        <header
            className='bg-canvas-bg-subtle border-canvas-bg-hover sticky top-0 z-50 w-full border-b shadow-sm'
            role='banner'>
            {/* px-4 sm:px-6 lg:px-8 */}
            <div className='mx-auto max-w-7xl px-4 xl:px-0'>
                <div className='flex h-16 items-center justify-between'>
                    <Logo />

                    {/* Desktop nav - hidden on small screens, visible on md and up */}
                    <nav aria-label='Primary navigation' className='hidden items-center space-x-4 md:flex'>
                    <ul className='flex space-x-3'>
                            {NAV_ITEMS.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={e => {
                                            e.preventDefault();
                                            scrollToSection(href);
                                        }}
                                        className='text-canvas-text hover:text-canvas-text-contrast rounded-sm px-2 py-2 text-base font-medium transition-colors'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* <ThemeToggle/> */}
                        <Link href='/support' className='flex-1'>
                            <Button
                                color='primary'
                                size='default'
                                variant='solid'
                                aria-label='Our Support'
                                name='Our Support'>
                                Support
                            </Button>
                        </Link>
                        {/* <Link href='https://www.bloggen.dev/' target='_blank'>
                            <Button
                                color='primary'
                                size='default'
                                variant='surface'
                                name='Create your first post'
                                trailingIcon={<ArrowUpRight className='h-4 w-4' />}>
                            </Button>
                        </Link> */}
                    </nav>

                    {/* Mobile menu button - visible on small screens, hidden on md and up */}
                    <Button
                        onClick={toggleMobile}
                        aria-label='Toggle menu'
                        aria-controls='mobile-menu'
                        aria-expanded={mobileOpen}
                        className='block md:hidden' // Changed from md:hidden to block md:hidden for clarity
                        color='neutral'
                        variant='ghost'
                        iconOnly
                        leadingIcon={
                            mobileOpen ? (
                                <FaTimes className='text-canvas-text h-5 w-5' />
                            ) : (
                                <FaBars className='text-canvas-text h-5 w-5' />
                            )
                        }
                    />
                </div>
            </div>

            {/* Mobile overlay menu - only rendered when mobileOpen is true */}
            {mobileOpen && (
                <nav
                    id='mobile-menu'
                    aria-label='Mobile navigation'
                    role='dialog'
                    aria-modal='true'
                    className='bg-canvas-base/95 fixed inset-0 top-16 z-50 backdrop-blur-sm md:hidden'>
                    <ul className='border-fg-border space-y-3 border-t p-4'>
                        {NAV_ITEMS.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={toggleMobile}
                                    className='text-canvas-text hover:bg-canvas-bg hover:text-primary-text block rounded-sm px-4 py-2 text-base font-medium transition-colors'>
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <div className='flex flex-col gap-3'>
                                <Link href='/support' onClick={toggleMobile} className='flex-1'>
                                    <Button color='primary' size='default' variant='solid' fullWidth name='Our Support'>
                                        Support
                                    </Button>
                                </Link>
                                {/* <Link href='https://www.bloggen.dev/' target='_blank' className='flex-1'>
                                    <Button
                                        color='neutral'
                                        size='default'
                                        variant='outline'
                                        trailingIcon={<ArrowUpRight className='h-4 w-4' />}
                                        fullWidth
                                        name='Create your first post'>
                                    </Button>
                                </Link> */}
                                {/* <ThemeSwitcher /> */}
                            </div>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
