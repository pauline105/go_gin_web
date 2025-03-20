import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "../../style/home/index.scss";
import { subsidy_option, unit_option } from "../../data/echarts/index.js";

function Home(): JSX.Element {
  const subsidyRef = useRef<HTMLDivElement | null>(null);
  const unitRef = useRef<HTMLDivElement | null>(null);
  const subsidyChart = useRef<echarts.ECharts | null>(null);
  const unitChart = useRef<echarts.ECharts | null>(null);
  const prevSubsidySize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const prevUnitSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const resizeTimeout = useRef<any>(null);

  useEffect(() => {
    if (subsidyRef.current && unitRef.current) {
      subsidyChart.current = echarts.init(subsidyRef.current);
      unitChart.current = echarts.init(unitRef.current);

      subsidyChart.current.setOption(subsidy_option);
      unitChart.current.setOption(unit_option);

      const observer = new ResizeObserver(() => {
        if (resizeTimeout.current) {
          cancelAnimationFrame(resizeTimeout.current);
        }

        resizeTimeout.current = requestAnimationFrame(() => {
          const subsidySize = subsidyRef.current?.getBoundingClientRect();
          const unitSize = unitRef.current?.getBoundingClientRect();

          // 只有當尺寸變化時，才會進行重繪
          if (subsidySize && (subsidySize.width !== prevSubsidySize.current.width || subsidySize.height !== prevSubsidySize.current.height)) {
            subsidyChart.current?.resize();
            prevSubsidySize.current = { width: subsidySize.width, height: subsidySize.height };
          }

          if (unitSize && (unitSize.width !== prevUnitSize.current.width || unitSize.height !== prevUnitSize.current.height)) {
            unitChart.current?.resize();
            prevUnitSize.current = { width: unitSize.width, height: unitSize.height };
          }
        });
      });

      observer.observe(subsidyRef.current);
      observer.observe(unitRef.current);

      return () => {
        observer.disconnect();
        subsidyChart.current?.dispose();
        unitChart.current?.dispose();
      };
    }
  }, []);

  return (
    <div className="home_container">
      <div className="info_box">
        <div>
          <div>
            <span>125,12<i className="decrease">-12.32%</i> </span>
            <span>訂單統計信息</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#sanhuamao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>653,33<i className="add">+42.32%</i></span>
            <span>月度計劃信息 </span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#heimao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>125,65 <i className="add">+17.32%</i> </span>
            <span> 年度計劃信息 </span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#nainiumao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>520,43<i className="decrease">-10.01%</i></span>
            <span>訪問統計信息</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#hashiqi"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="charts-container">
        <div ref={subsidyRef} className="chart echarts_subsidy"></div>
        <div ref={unitRef} className="chart echarts_unit "></div>
      </div>
      <div className="tool_box">
      
      </div>
    </div>
  );
}

export default Home;
