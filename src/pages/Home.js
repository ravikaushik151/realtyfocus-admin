import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Line, Bar } from "react-chartjs-2";
import { fetchDashboardlistData, GetprofileListById } from "../reducer/thunks";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [barChartData, setBarChartData] = useState(null);
  const [weeklyLineChar, setweeklyLineChart] = useState(null);

  // Destructuring with different names to avoid conflict
  const {
    data: Dashboardlistres,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
  document.title = "Realty Focus";
  document.getElementsByTagName("META")[2].content = "Realty Focus";

  const salesData = [1000, 1200, 800, 1500, 1100, 1300];

  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "ths", "fir", "sat", "sun"],
    datasets: [
      {
        label: "Monthly Sales (Line)",
        data: salesData,
        fill: true,
        borderColor: "#c02429",
        tension: 0.4,
      },
    ],
  };

  const getLineChartData = (chartYears) => {
    const months = Object.keys(chartYears);

    const datasets = [
      {
        label: "Sales (Line)",
        data: months.map((month) => chartYears[month]),
        fill: true,
        borderColor: "#c02429",
        tension: 0.1,
      },
    ];

    return {
      labels: months.map((month) => capitalizeFirstThreeLetters(month)),
      datasets: datasets,
    };
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const options1 = {
    scales: {
      x: {
        display: false,
        beginAtZero: true,
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  const capitalizeFirstThreeLetters = (string) => {
    if (string.length >= 3) {
      return string.substring(0, 3).toUpperCase();
    } else {
      // If the string has fewer than 3 characters, just capitalize the entire string
      return string.toUpperCase();
    }
  };

  const getBarChartData = (chartYears) => {
    const months = Object.keys(chartYears);

    const datasets = [
      {
        label: "Sales",
        data: months.map((month) => chartYears[month]),
        backgroundColor: months.map((_, index) =>
          index % 2 === 0 ? "#c02429" : "rgba(75, 192, 192, 1)"
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 20, // Set the border radius for all bars
      },
    ];

    return {
      labels: months.map((month) => capitalizeFirstThreeLetters(month)),
      datasets: datasets,
    };
  };
  /*
    useEffect(() => {
      const fetchData = async () => {
        let userId = localStorage.getItem("userId");
  
        // Dispatch action to fetch data
        await dispatch(fetchDashboardlistData());
  
        // Check if the data is available and not undefined
        if (Dashboardlistres && Dashboardlistres.chartYears) {
          // Process the data and update the state
          const chartData = getBarChartData(Dashboardlistres.chartYears);
          setBarChartData(chartData);
        }
        if (Dashboardlistres && Dashboardlistres.last7DaysAmount) {
          const weeklyLineChartData = getLineChartData(
            Dashboardlistres.last7DaysAmount
          );
          console.log(weeklyLineChartData, "weeklyLineChartData");
          setweeklyLineChart(weeklyLineChartData);
        }
      };
  
      fetchData();
    }, [dispatch]);*/

  document.addEventListener("DOMContentLoaded", function () {
    const isWindows = navigator.platform.indexOf("Win") > -1;
    if (isWindows) {
      document.body.classList.add("windows");
    } else {
      document.body.classList.add("non-windows");
    }
  });

  return (
    <>
      <Header />
      <div className="container-fluid  ">
        <div className="row ">
          <Sidebar />
          <div className="col-md-10  dashboard bg-color-main ">
            <div className="main px-5 my-5">
              <div className="row">
                <div className="col-md-8 ">
                  <p className="fs-3 fw-semibold text-start col-md-6 col-12">
                    {" "}
                    Dashboard Overview
                  </p>
                </div>
                <div className="col-md-4">
                  <form
                    className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                    role="search"
                  >
                    {/* <div className="input-group flex-nowrap bg-danger-subtle  rounded-pill">
                        <span className="input-group-text border-0 bg-danger-subtle" id="addon-wrapping">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-0 bg-danger-subtle text-secondary"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="addon-wrapping"
                        />
                      </div> */}
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/today-order.png"
                                  className=""
                                  alt="Today's Job "
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Today's Job
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.orders?.today_order
                                      ?.order_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row py-1 rounded mt-3 mb-0 px-0 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.today_order
                                    ?.total_amount_card
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.today_order
                                    ?.total_amount_cash
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* first item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/yesterday-order.png"
                                  className=""
                                  alt="Yesterday's Job "
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Yesterday's Job
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.orders?.yesterday_order
                                      ?.order_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.today_order
                                    ?.total_amount_card
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.today_order
                                    ?.total_amount_cash
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* second item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/month-order.png"
                                  className=""
                                  alt="This Month's Job "
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  This Month's Job
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.orders?.months_order?.order_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.months_order
                                    ?.total_amount_card
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.months_order
                                    ?.total_amount_cash
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* third item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/all-time-order.png"
                                  className=""
                                  alt="All-Time Job "
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  All-Time Job
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.orders?.yearly_order?.order_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.yearly_order
                                    ?.total_amount_card
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.orders?.yearly_order
                                    ?.total_amount_cash
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* fourth item complete */}
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/month-order.png"
                                  className=""
                                  alt="This Month's Job "
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Posted Focus
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.Focus?.month_listings
                                      ?.total_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.full_time_count
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.part_time_count
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* first item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/month-order.png"
                                  className=""
                                  alt="This Month's Job Listings"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Application
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.Focus?.month_listings
                                      ?.total_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.full_time_count
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.part_time_count
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* second item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/month-order.png"
                                  className=""
                                  alt="This Month's Job Listings"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Messages
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.Focus?.month_listings
                                      ?.total_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.full_time_count
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.month_listings
                                    ?.part_time_count
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* third item complete */}
                    <div className="col-md-3">
                      <div className="overview mt-3 px-3 py-3 bg-white rounded">
                        <div className="row d-flex">
                          <div className="col-4">
                            <div className="text-dark text-center">
                              <span className="icon text-light">
                                <img
                                  src="assets/images/all-time-order.png"
                                  className=""
                                  alt="All-Time Job Listings"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-8 d-flex align-self-center justify-content-center">
                            <div className="details text-center">
                              <div>
                                <p className="fw-semibold fs-6 mb-0 text-secondary">
                                  Shortlist
                                </p>
                                <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                  {
                                    Dashboardlistres?.Focus?.all_time_listings
                                      ?.total_count
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-details">
                          <div className="row rounded mt-3 border-top">
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Full-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.all_time_listings
                                    ?.full_time_count
                                }
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="fw-semibold small my-1 text-secondary">
                                Part-Time:
                              </p>
                              <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                {
                                  Dashboardlistres?.Focus?.all_time_listings
                                    ?.part_time_count
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* fourth item complete */}
                  </div>
                </div>
              </div>

              {/*start 2 item*/}
              <div className="row my-5">
                <div className="col-md-12">
                  <p className="fs-3 fw-semibold"> Sales</p>
                  <div className="row">
                    <div className="col-md-6 bg-white rounded pt-4  ">
                      {barChartData && barChartData.labels && (
                        <Bar data={barChartData} options={options} />
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        {/* Total Job Postings */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Capa3.png")}
                                      className="fa-solid text-gray"
                                      alt="Total Job Postings"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Total Job Postings
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {Dashboardlistres?.sales?.completed_order}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Active Job Postings */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Frame_2.png")}
                                      className="fa-solid text-gray"
                                      alt="Active Job Postings"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Active Job Postings
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {Dashboardlistres?.sales?.delivered_order}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Total Job Applications */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Frame_1.png")}
                                      className="fa-solid text-gray"
                                      alt="Total Job Applications"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Total Job Applications
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {Dashboardlistres?.sales?.shipped_order}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Shortlisted Candidates */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Frame_1.png")}
                                      className="fa-solid text-gray"
                                      alt="Shortlisted Candidates"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Shortlisted Candidates
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {Dashboardlistres?.sales?.processing_order}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Interviews Scheduled */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Capa2.png")}
                                      className="fa-solid text-gray"
                                      alt="Interviews Scheduled"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Interviews Scheduled
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {
                                        Dashboardlistres?.sales
                                          ?.pending_order
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Total Hires */}
                        <div className="col-md-6 mb-3">
                          <div className="overview rounded px-2 py-3 bg-white">
                            <div className="row d-flex">
                              <div className="col-3">
                                <div className="text-dark fs-2 fw-bold text-center mt-2 mb-2">
                                  <span className="rounded-circle px-3 py-2 bg-secondary-subtle text-light">
                                    <img
                                      src={require("../constant/images/Capa.png")}
                                      className="fa-solid text-gray"
                                      alt="Total Hires"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-9 d-flex align-self-center justify-content-center">
                                <div className="details text-center">
                                  <div>
                                    <p className="fw-semibold fs-6 mb-0 text-secondary">
                                      Total Hires
                                    </p>
                                    <p className="fw-bold fs-6 mb-0 text-secondary-emphasis">
                                      {
                                        Dashboardlistres?.sales
                                          ?.processing_order
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*4th item complete*/}
                  </div>
                </div>
              </div>
              {/*start 3 item*/}
              <div className="row my-5">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fs-3 fw-semibold">Weekly Sales</p>
                      <div className=" bg-white rounded pt-4">
                        {weeklyLineChar && weeklyLineChar.labels && (
                          <Line data={weeklyLineChar} options={options} />
                        )}
                        {/* <Line data={lineChartData} options={options} /> */}
                      </div>
                      {/*  <img src="assets/images/graph2.png" className="img-fluid" /> */}
                    </div>
                    {/* <div className="col-md-6 ">
                      <p className="fs-3 fw-semibold">Best Selling Product</p>
                      <div className="container   ">
                        <div className="row justify-content-center px-1 ">
                          <div className="col-md-3 col-6 mb-3 rouneded">
                            <div className="circle">
                              <div className="text"> 60%</div>
                            </div>
                          </div>
                          <div className="col-md-3 col-6 mb-3 rouneded">
                            <div className="circle">
                              <div className="text">60%</div>
                            </div>
                          </div>
                          <div className="col-md-3 col-6 mb-3 rouneded">
                            <div className="circle">
                              <div className="text">60%</div>
                            </div>
                          </div>
                          <div className="col-md-3 col-6 mb-3 rouneded">
                            <div className="circle">
                              <div className="text">60%</div>
                            </div>
                          </div>
                        </div>
                      
                      </div>

                      <div className="row  mx-auto  px-3 py-3 bg-white">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-4 col-6 ps-2">
                              Lorem ipsum
                            </div>
                            <div className="col-md-8 col-6 ">
                              <div
                                className="progress mt-3 mb-3"
                                role="progressbar"
                                aria-label="Example 1px high"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: 2 }}
                              >
                                <div
                                  className="progress-bar progress-bar-striped bg-danger"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 ps-2">Lorem ipsum</div>
                            <div className="col-8 ">
                              <div
                                className="progress mt-3 mb-3"
                                role="progressbar"
                                aria-label="Example 1px high"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: 2 }}
                              >
                                <div
                                  className="progress-bar progress-bar-striped bg-warning"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 ps-2">Lorem ipsum</div>
                            <div className="col-8 ">
                              <div
                                className="progress mt-3 mb-3"
                                role="progressbar"
                                aria-label="Example 1px high"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: 2 }}
                              >
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 ps-2">Lorem ipsum</div>
                            <div className="col-8 ">
                              <div
                                className="progress mt-3 mb-3"
                                role="progressbar"
                                aria-label="Example 1px high"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ height: 2 }}
                              >
                                <div
                                  className="progress-bar"
                                  style={{ width: "25%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/*4th item complete*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
