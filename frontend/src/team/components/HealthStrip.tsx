import { LIBRARY_YTD, OCEANX_REPORT_MONTH } from '../data/oceanxMetrics';
import { SectionHeader } from './SectionHeader';
import styles from './HealthStrip.module.css';

export function HealthStrip() {
  const newItems = LIBRARY_YTD.newCreated;
  const adaptedItems = LIBRARY_YTD.alumniCoCreated;
  const obsoleteItems = LIBRARY_YTD.obsolete;

  const formatNumber = (num: number): string => num.toLocaleString();

  return (
    <section className={styles.strip} aria-label="Library health">
      <SectionHeader
        title="Library health"
        subtitle="Year to date"
        goToLabel="Go to Insights"
        goToHref="/team/insights"
      />
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statInner}>
            <div className={styles.labelRow}>
              <span className={styles.accentSquare} aria-hidden="true" />
              <span className={styles.labelText}>Websites</span>
            </div>
            <div className={styles.numberRow}>
              <span className={styles.bigNumber}>{formatNumber(LIBRARY_YTD.websites)}</span>
            </div>
          </div>
          <p className={styles.sentence}>Websites in the library</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statInner}>
            <div className={styles.labelRow}>
              <span className={styles.accentSquare} aria-hidden="true" />
              <span className={styles.labelText}>Digital media</span>
            </div>
            <div className={styles.numberRow}>
              <span className={styles.bigNumber}>{formatNumber(LIBRARY_YTD.digitalMedia)}</span>
            </div>
          </div>
          <p className={styles.sentence}>Digital media files in the library</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statInner}>
            <div className={styles.labelRow}>
              <span className={styles.accentSquare} aria-hidden="true" />
              <span className={styles.labelText}>New (year to date)</span>
            </div>
            <div className={styles.numberRow}>
              <span className={styles.bigNumber}>{formatNumber(newItems)}</span>
            </div>
          </div>
          <p className={styles.sentence}>Recently added to the library</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statInner}>
            <div className={styles.labelRow}>
              <span className={styles.accentSquare} aria-hidden="true" />
              <span className={styles.labelText}>Adapted</span>
            </div>
            <div className={styles.numberRow}>
              <span className={styles.bigNumber}>{formatNumber(adaptedItems)}</span>
            </div>
          </div>
          <p className={styles.sentence}>Adapted by partners</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statInner}>
            <div className={styles.labelRow}>
              <span className={styles.accentSquare} aria-hidden="true" />
              <span className={styles.labelText}>Obsolete</span>
            </div>
            <div className={styles.numberRow}>
              <span className={styles.bigNumber}>{formatNumber(obsoleteItems)}</span>
            </div>
          </div>
          <p className={styles.sentence}>Hidden from library</p>
        </div>
      </div>
      <p className={styles.sectionNote}>
        Library, year to date. Source: OceanX Digital Content Management, {OCEANX_REPORT_MONTH}.
      </p>
    </section>
  );
}