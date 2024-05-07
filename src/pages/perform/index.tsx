import { FC } from 'react';
import useData from './hook';
import styles from './index.less';
import PerformVideo from '@/conponents/perform-video';
import { CapsuleTabs } from 'antd-mobile';

const Index: FC = () => {
    const {
        performList, performId,
        handlePerformChange,
    } = useData();
    return (
        <div className={styles.root}>
            <PerformVideo className={styles.video} performId={performId} />
            <div className={styles.scroll}>
            {
                performList.map((cla) => {
                    return (
                        <div className={styles.block}>
                            <div className={styles.title}>{cla.name}</div>
                            <CapsuleTabs activeKey={String(performId)} onChange={handlePerformChange}>
                                {
                                    cla.children.map(d => {
                                        return (
                                            <CapsuleTabs.Tab title={d.name} key={String(d.id)}/>
                                        );
                                    })
                                }
                            </CapsuleTabs>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default Index;