import Container from "@/components/Container"
import WeeklyChart from "@/components/contents/monitoring/WeeklyChart";
import Monitoring from "@/components/dashboard/Monitoring"

const MonitoringPage = () => {
  return (
    <Container>
      <Monitoring>
        <WeeklyChart />
      </Monitoring>
    </Container>
  )
}

export default MonitoringPage;
