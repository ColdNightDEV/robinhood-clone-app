import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

const styles = {
	wrapper: `w-screen h-screen flex flex-col`
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
			{/*<Header /> */}
			<div className={styles.mainContainer}>
				<div cclassName={styles.portfolioAmountContainer}>
					<div className={styles.portfolioAmount}>23 ETH</div>
					<div className={styles.portfolioPercent}>
						+0.0003(+0.57)
						<span className={styles.pastHour}></span>
					</div>
				</div>
				<div>
					<div className={styles.chartcontainer}>
						{/*<portfolioChart />*/}
					</div>
				</div>
				<div className={styles.buyingPowerContainer}>
					<div className={styles.buyingPowerTitle}>
						Buying Power
					</div>
					<div className={style.buyingPowerAmount}>12 ETH</div>
				</div>
				<div className={styles.notice}>
					<div className={styles.noticeContainer}>
						<div className={styles.noticeTitle}>Send Funds</div>
						<div className={styles.noticeMessage}>Transfer your funds here</div>
						{/*<BuyTokens />*/}
					</div>
				</div>
				{/*<Notice />*/}
			</div>
			<div className={styles.rightMain}>
				<div className={styles.rightMainItem}>
					<div className={styles.itemTitle}>Crypto Currencies</div>

					<BiDotsHorizontalRounded className={styles.moreOptions} />
				</div>
				{/* Map through the coins and for every coin make an asset component*/}
			</div>
    </div>
  )
}
