import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/usps.scss';

export default function USPS() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <article
                    id="USPS"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <div className="USPS_content">
                        <h1 className="title">Introduction</h1>
                        <section className="text">
                            <p>
                                Fugiat reprehenderit nulla nisi qui sit
                                excepteur amet et ut ad dolore aute anim. Cillum
                                laboris eu veniam elit dolor eiusmod consectetur
                                aliqua nulla laboris esse. Ut ea sit cupidatat
                                labore officia officia qui amet eu. Sunt
                                consectetur Lorem reprehenderit occaecat est ut
                                nostrud cupidatat. Esse nisi elit ut esse elit
                                veniam occaecat duis voluptate cillum minim
                                nulla. Enim aliquip esse dolor eu do aute.
                                Fugiat occaecat ut laborum magna non sit. Duis
                                commodo ad cillum minim occaecat. Laboris dolore
                                aliquip dolore esse sunt ullamco laborum. Ad
                                cillum labore ullamco consectetur. Elit labore
                                esse pariatur ea cupidatat duis velit
                                adipisicing commodo dolor. Proident enim ea
                                aliqua excepteur ullamco labore sit. Cupidatat
                                nulla voluptate velit occaecat sint ullamco
                                adipisicing ullamco Lorem minim culpa laboris
                                laborum anim. Amet eu magna enim laborum
                                exercitation fugiat tempor qui reprehenderit
                                nulla proident occaecat. Enim esse esse dolor
                                qui fugiat quis exercitation. Proident ut minim
                                deserunt quis. Sint eiusmod in consequat enim
                                excepteur et nostrud amet excepteur mollit magna
                                sint ea. Elit voluptate aliquip culpa eiusmod ea
                                voluptate. Anim quis ullamco esse quis proident
                                et laborum commodo ex nostrud consequat nostrud
                                magna ea. Incididunt adipisicing aliquip
                                incididunt ad mollit pariatur sint. Officia
                                commodo ex veniam duis magna dolore commodo nisi
                                nostrud ex et consectetur. Nulla eiusmod in
                                fugiat nostrud voluptate cupidatat incididunt
                                culpa qui id aliqua. Proident magna amet laboris
                                deserunt officia aliqua voluptate in deserunt id
                                eiusmod non amet. Eu aute cupidatat amet
                                proident reprehenderit commodo sunt id ut id
                                magna cupidatat cillum. Incididunt dolor
                                cupidatat fugiat eu sit consectetur magna
                                nostrud ex non dolore. Consequat proident irure
                                dolore commodo ad et quis dolore consectetur
                                elit non sit. Incididunt culpa laboris velit
                                incididunt proident in veniam ea amet
                                reprehenderit reprehenderit occaecat enim
                                adipisicing. Minim reprehenderit sunt Lorem do
                                sint nostrud ad culpa proident aliqua quis.
                            </p>
                        </section>
                        <section className="uspslist">
                            <ul>
                                <li>
                                    Duis sunt laborum fugiat eu ad irure aliquip
                                </li>
                                <li>
                                    Duis sunt laborum fugiat eu ad irure aliquip
                                </li>
                                <li>
                                    Duis sunt laborum fugiat eu ad irure aliquip
                                </li>
                            </ul>
                        </section>
                    </div>
                </article>
            )}
        </ThemeContext.Consumer>
    );
}
