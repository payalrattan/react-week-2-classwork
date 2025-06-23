
import styles from "@/app/page.module.css";
import { Card } from "@/components/card/Card";
import { Greeting } from "@/components/card/greeting/Greeting";


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Card isLoading={true} isShowHeader={true}/>
      <Card isContent={true} isShowHeader={false} />
     <Card isLoading={false} isContent={true} isShowHeader={true}/>
     <Card isLoading={false} isContent={false} />
      <Greeting isLoading={true} isContent={true} />
      <Greeting isLoading={false} isContent={false} />
    </div>
  )
}
