import styles from './AgenticWorkflowDiagram.module.css';

export function AgenticWorkflowDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.grid}>

        {/* Row 1: Plan & design */}
        <div className={styles.label}>Claude</div>
        <div className={styles.connector}>
          <div className={styles.dot} />
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <p className={styles.contentTitle}>Plan &amp; design</p>
          <p className={styles.contentBody}>Strategy, design system, exemplars</p>
        </div>

        {/* Row 2: Execute */}
        <div className={styles.label}>Gemini CLI</div>
        <div className={styles.connector}>
          <div className={styles.dot} />
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <p className={styles.contentTitle}>Execute</p>
          <p className={styles.contentBody}>Explicit instructions, grunt work</p>
        </div>

        {/* Row 3: Refine & redirect */}
        <div className={styles.label}>Claude</div>
        <div className={styles.connector}>
          <div className={styles.dot} />
          <div className={styles.lineTall} />
        </div>
        <div className={styles.content}>
          <p className={styles.contentTitle}>Refine &amp; redirect</p>
          <p className={styles.contentBody}>
            Review output, update design system or big-picture direction<br />
            as needed — then hand back
          </p>
          <p className={styles.contentLoop}>↻ Returns to Execute until the work is done</p>
        </div>

        {/* Row 4: QA & publish */}
        <div className={styles.label}>Claude</div>
        <div className={styles.connector}>
          <div className={styles.dot} />
        </div>
        <div className={styles.contentLast}>
          <p className={styles.contentTitle}>QA &amp; publish</p>
          <p className={styles.contentBody}>Final review, then ship</p>
        </div>

      </div>
    </div>
  );
}
