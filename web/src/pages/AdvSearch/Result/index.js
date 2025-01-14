import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import Pagination from '../../../components/Pagination'
// import Protein from '../../../assets/img/protein.png'
// import { data } from './data'

const PageSize = 20

const Result = ({ searchResults }) => {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return searchResults.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <section>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={searchResults.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5">
        {currentTableData.map((item) => {
          return (
            <div
              key={item.cluster_id}
              className="col-span-1 mx-auto custom-shadow p-4 w-full hover:shadow-2xl"
            >
              <div className="flex justify-between select-none">
                <div className="has-tooltip text-xs sm:text-sm">
                  {item.match.name !== '' && (
                    <div className="tooltip rounded shadow-lg bg-primary-dark text-white -mt-16 sm:ml-36 p-2">
                      <ul>
                        <li>
                          <span>
                            Search by: {item.search.value} ({item.search.name})
                          </span>
                        </li>
                        <li>
                          <span>
                            Matched: {item.match.value} ({item.match.name})
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                  <h1 className="pb-2 text-base sm:text-lg md:text-xl font-bold text-gray-700 cursor-pointer">
                    Cluster: {item.codnasq_id}
                  </h1>
                </div>
              </div>
              <hr />
              <div
                className="grid grid-cols-1 xl:grid-cols-2 cursor-pointer select-none"
                onClick={() => history.push(`/cluster/${item.codnasq_id}`)}
              >
                <div className="self-center space-y-2">
                  <h1 className="pt-2 text-sm sm:text-base">Group: {item.group}</h1>
                  <hr />
                  <h1 className="text-sm sm:text-base">
                    Oligomeric State: {item.oligomeric_state}
                  </h1>
                  <hr />
                  <h1 className="text-sm sm:text-base">Conformers Quantity: {item.num_conf}</h1>
                  <hr />
                  <h1 className="text-sm sm:text-base">
                    Max RMSD Quaternary: {item.max_rmsd_quaternary} Å
                  </h1>
                  <hr />
                  <h1 className="text-sm sm:text-base">
                    Max RMSD Tertiary: {item.max_rmsd_tertiary} Å
                  </h1>
                </div>
                <div className="slef-center">
                  <img className="mx-auto" src={item.image_url} alt="protein" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={searchResults.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  )
}

Result.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default Result
