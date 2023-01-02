import { useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.bloc__tabs}>
                <button
                    className={toggleState === 1 ? `${styles.tabs} ${styles.active}` : styles.tabs}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </button>
                <button
                    className={toggleState === 2 ? `${styles.tabs} ${styles.active}` : styles.tabs}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
                <button
                    className={toggleState === 3 ? `${styles.tabs} ${styles.active}` : styles.tabs}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </button>
            </div>

            <div className={styles.content__tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active__content}` : styles.content}>
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium incidunt quia
                        aspernatur quasi quidem facilis quo nihil vel voluptatum?
                    </p>
                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active__content}` : styles.content}>
                    <h2>Content 2</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active__content}` : styles.content}>
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum laudantium totam
                        unde adipisci incidunt modi alias! Accusamus in quia odit aspernatur provident et ad vel
                        distinctio recusandae totam quidem repudiandae omnis veritatis nostrum laboriosam architecto
                        optio rem, dignissimos voluptatum beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
