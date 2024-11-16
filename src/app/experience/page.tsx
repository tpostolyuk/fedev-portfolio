import { MdDateRange, MdLocationOn } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import clsx from "clsx";

import { Title } from "@/components/title";

export default function Contact() {
  return (
    <>
      <Title title="EXPERIENCE" />
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-center px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-4">
          <div
            className={clsx(
              "flex w-full gap-2 border-b-2 border-b-slate-900 text-xl font-semibold",
              "md:text-3xl dark:border-b-white",
            )}
          >
            <GoProject />
            <h2>Projects</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Real-Time Cryptocurrency Tracking App (B2C)
            </p>
            <p>
              A real-time cryptocurrency app that provides comprehensive
              charting features for displaying and analyzing various
              cryptocurrency indexes. The application offers dynamic and
              interactive visualizations, enabling users to monitor market
              trends and make informed investment decisions. It features
              real-time data updates, multiple filtering options, and a sleek,
              user-friendly interface for seamless navigation. Key
              functionalities include responsive design, integration with
              third-party APIs for fetching live market data, and performance
              optimization to handle large datasets efficiently.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MdDateRange />
              <span>04/2023 - 06/2023</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Deployment Pipeline Management Dashboard (B2B)
            </p>
            <p>
              Control plane that helps team for managing all deployments and
              deployments pipelines through a single panel. The control plane
              provides strong visuals for deployment pipelines, giving a clear
              view of progress in which users can create fully automated
              deployment pipelines, all without manual action.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MdDateRange />
              <span>04/2022 - 04/2023</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Interactive Floor Plan Editor for Space Booking (B2B)
            </p>
            <p>
              Interactive editor with ability to upload floor plan and creating
              spaces for it further using by booking spaces (restaurants,
              coworking places, parking lots).
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MdDateRange />
              <span>10/2021 - 04/2022</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Document Approval Admin Panel (B2E)
            </p>
            <p>
              An internal admin panel designed to streamline the document
              approval process within a company. The application provides a
              centralized and secure interface for reviewing, managing, and
              approving lists of documents efficiently. It includes features
              such as infinite scrolling for better user experience, file
              management capabilities for organizing and accessing documents,
              and responsive design to ensure compatibility across various
              devices. The panel integrates with backend APIs for seamless data
              exchange and includes functionality for bug-fixing and performance
              enhancements to maintain smooth operation.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MdDateRange />
              <span>08/2021 - 10/2021</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Energy Analytics Dashboard Application (B2E)
            </p>
            <p>
              An energy management control panel developed for internal use,
              providing detailed analytics on electricity consumption and other
              key metrics. The dashboard visualizes data through interactive
              charts and tables, offering insights into energy usage patterns to
              help optimize consumption and reduce costs. It supports features
              such as user authentication and token-based session management for
              security, dynamic data visualization for real-time updates, and an
              intuitive user interface. The application also includes options
              for refreshing tokens, conducting code reviews, and continuous
              optimization to ensure robust performance and user efficiency.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MdDateRange />
              <span>06/2020 - 08/2021</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-center px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-4">
          <div
            className={clsx(
              "flex w-full gap-2 border-b-2 border-b-slate-900 text-xl font-semibold",
              "md:text-3xl dark:border-b-white",
            )}
          >
            <FaUniversity />
            <h2>Education</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Bachelor&apos;s degree in Computer Science
            </p>
            <div>
              <p className="text-">
                Ternopil Ivan Puluj National Technical University
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MdDateRange />
                <span>01/2018 - 01/2022</span>
                <div className="flex items-center">
                  <MdLocationOn />
                  <span>Ukraine</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className={clsx("text-lg font-medium", "md:text-xl")}>
              Master&apos;s degree in System Analysis
            </p>
            <div>
              <p className="text-">
                Ternopil Ivan Puluj National Technical University
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MdDateRange />
                <span>01/2023 - 01/2025</span>
                <div className="flex items-center">
                  <MdLocationOn />
                  <span>Ukraine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-center px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-4">
          <div
            className={clsx(
              "flex w-full gap-2 border-b-2 border-b-slate-900 text-xl font-semibold",
              "md:text-3xl dark:border-b-white",
            )}
          >
            <GrLanguage />
            <h2>Languages</h2>
          </div>
          <div
            className={clsx(
              "flex w-full flex-col items-start justify-between gap-4",
              "md:flex-row md:items-center",
            )}
          >
            <div className="flex items-center gap-2">
              <p className={clsx("text-lg font-medium", "md:text-xl")}>
                English
              </p>
              <span>-</span>
              <p>Upper Intermediate</p>
            </div>
            <div className="flex items-center gap-2">
              <p className={clsx("text-lg font-medium", "md:text-xl")}>
                Ukrainian
              </p>
              <span>-</span>
              <p>Native</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
