import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "../../style/home/index.scss";
import { subsidy_option, unit_option, geothermy_option } from "../../data/echarts/index.js";

function Home(): JSX.Element {
  const subsidyRef = useRef<HTMLDivElement | null>(null);
  const unitRef = useRef<HTMLDivElement | null>(null);
  const geothermyRef = useRef<HTMLDivElement | null>(null);
  
  const subsidyChart = useRef<echarts.ECharts | null>(null);
  const unitChart = useRef<echarts.ECharts | null>(null);
  const geothermyChart = useRef<echarts.ECharts | null>(null);
  
  const prevSubsidySize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const prevUnitSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const prevGeothermySize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  
  const resizeTimeout = useRef<any>(null);
  
  useEffect(() => {
    if (subsidyRef.current && unitRef.current && geothermyRef.current) {
      subsidyChart.current = echarts.init(subsidyRef.current);
      unitChart.current = echarts.init(unitRef.current);
      geothermyChart.current = echarts.init(geothermyRef.current);
  
      subsidyChart.current.setOption(subsidy_option);
      unitChart.current.setOption(unit_option);
      geothermyChart.current.setOption(geothermy_option);
  
      const observer = new ResizeObserver(() => {
        if (resizeTimeout.current) {
          cancelAnimationFrame(resizeTimeout.current);
        }
  
        resizeTimeout.current = requestAnimationFrame(() => {
          const subsidySize = subsidyRef.current?.getBoundingClientRect();
          const unitSize = unitRef.current?.getBoundingClientRect();
          const geothermySize = geothermyRef.current?.getBoundingClientRect();
  
          if (subsidySize && (subsidySize.width !== prevSubsidySize.current.width || subsidySize.height !== prevSubsidySize.current.height)) {
            subsidyChart.current?.resize();
            prevSubsidySize.current = { width: subsidySize.width, height: subsidySize.height };
          }
  
          if (unitSize && (unitSize.width !== prevUnitSize.current.width || unitSize.height !== prevUnitSize.current.height)) {
            unitChart.current?.resize();
            prevUnitSize.current = { width: unitSize.width, height: unitSize.height };
          }
  
          if (geothermySize && (geothermySize.width !== prevGeothermySize.current.width || geothermySize.height !== prevGeothermySize.current.height)) {
            geothermyChart.current?.resize();
            prevGeothermySize.current = { width: geothermySize.width, height: geothermySize.height };
          }
        });
      });
  
      observer.observe(subsidyRef.current);
      observer.observe(unitRef.current);
      observer.observe(geothermyRef.current);
  
      return () => {
        observer.disconnect();
        subsidyChart.current?.dispose();
        unitChart.current?.dispose();
        geothermyChart.current?.dispose();
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
        <div className="Navigation_box">
          <div>快捷導航工具</div>

          <div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#peony"></use>
                </svg>
                淺粉紅
              </span>
              <span>2.1%OBS/M</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#cherryblossom"></use>
                </svg>
                深紅
              </span>
              <span>30°C</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#weibiaoti-1"></use>
                </svg>
                淡紫紅
              </span>
              <span>57%RH</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#peony"></use>
                </svg>
                弱紫羅蘭紅
              </span>
              <span>107w</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#cherryblossom"></use>
                </svg>
                中紫羅蘭紅
              </span>
              <span>57DB</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#weibiaoti-1"></use>
                </svg>
                紫羅蘭
              </span>
              <span>57PV</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#peony"></use>
                </svg>
                暗紫羅蘭
              </span>
              <span>517Cpd</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#cherryblossom"></use>
                </svg>
                幽靈白
              </span>
              <span>12kg</span>
            </div>
            <div>
              <span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#weibiaoti-1"></use>
                </svg>
                海軍藍
              </span>
              <span>64fm</span>
            </div>
          </div>
        </div>

        <div className="geothermy">
          <div ref={geothermyRef} className="geothermy_box"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
