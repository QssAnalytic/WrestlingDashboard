import OveralScore from './overal_score/OveralScore'
import ScorecardMetrics from './scorecard_metrics/ScorecardMetrics'
import OffenceStats from './offence_stats/OffenceStats'
import SummaryStats from './summary_stats/SummaryStats'
import OverallScoreByYears from './overall_score_by_years/OverallScoreByYears'
import ScoresByYears from './scores_by_years/ScoresByYears'
import OffenceStatsByYears from './offence_stats_by_years/OffenceStatsByYears'

const LeftFrame = () => {

    return (
        <section className=''>
            <h1 className='font-customweight leading-5 tracking-wider font-inter text-center  text-[#ECC254] pt-2 pb-4'>Inside the ring: Tactical Evaluation</h1>

            <div className='border border-[#ECC254] h-full rounded flex p-4 gap-4'>

                <div className='flex flex-col justify-between'>
                    <OveralScore />

                    <ScorecardMetrics />

                    <OffenceStats />

                    <SummaryStats />
                </div>

                <div className='flex flex-col justify-between'>
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