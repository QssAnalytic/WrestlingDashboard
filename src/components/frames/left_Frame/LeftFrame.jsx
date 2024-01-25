import OveralScore from './overal_score/OveralScore'
import ScorecardMetrics from './scorecard_metrics/ScorecardMetrics'
import OffenceStats from './offence_stats/OffenceStats'
import SummaryStats from './summary_stats/SummaryStats'
import OverallScoreByYears from './overall_score_by_years/OverallScoreByYears'
import ScoresByYears from './scores_by_years/ScoresByYears'
import OffenceStatsByYears from './offence_stats_by_years/OffenceStatsByYears'

const LeftFrame = () => {

    return (
        <section className='w-fit'>
            <h1 className='font-customweight leading-5 tracking-wider font-inter text-center my-3 text-[#ECC254]'>Inside the ring: Tactical Evaluation</h1>

            <div className='border border-[#ECC254]  rounded  flex justify-between items-center  p-4 gap-5 '>

                <div className='flex flex-col gap-y-4   '>
                    <OveralScore />

                    <ScorecardMetrics />

                    <OffenceStats />

                    <SummaryStats />
                </div>

                <div className='flex flex-col gap-y-3'>
                    <OverallScoreByYears />

                     <OffenceStats />

                    <ScoresByYears />

                    <OffenceStatsByYears /> 
                </div>
            </div>
        </section>
    )
}

export default LeftFrame