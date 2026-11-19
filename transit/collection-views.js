/*
 * Student-facing emphasis for Case 04:
 * The organizational problem is collecting complete, accurate, timely train-level
 * updates from field, station and operations sources. Public communication is a
 * downstream consequence, not the assumed root cause.
 */
window.createTransitCollectionViews = function (h) {
  'use strict';
  const {C, wrap, head, panel, hero, card, spark, miniMetric, esc, fmt,
    story, people, investigations, riders, documents, constraints} = h;

  function home() {
    const newHero = hero();
    return wrap(`
      ${newHero}
      <div class="home-row">
        ${panel('THE REAL-TIME INFORMATION GAP',
          '<div class="strip">' +
          miniMetric('Trains on time', '89.8%', '↑ 1.7 pp from P1', true) +
          miniMetric('Median verified update lag', '29 min', '↑ 18 minutes from P1', false) +
          miniMetric('Complete updates within 10 min', '36%', '↓ 34 pp from P1', false) +
          miniMetric('Records needing follow-up', '43', '↑ 29 records from P1', false) +
          '</div>', 'P4 · OCT 19–NOV 1')}
      </div>
      <div class="home-row grid-2">
        ${panel('CENTRAL INCIDENT · IR-114',
          '<div class="pad"><div class="overline">Newark Penn · October 20</div>' +
          '<h2 style="font-size:20px;line-height:1.3;color:#163e69;margin:9px 0">The disruption was logged. The train-specific information was not.</h2>' +
          '<p>At 7:42 AM, service control opened an incident. The affected train and stops were still missing from the shared record. A coordinator completed the verified update at 8:11 AM — 29 minutes later.</p>' +
          '<p>Passenger messages followed. The evidence points to a problem earlier in the information process: obtaining and recording reliable facts from different employees and systems.</p>' +
          '<a class="quick-link" href="#investigations">Read the incident chronology ↗</a></div>',
          'A COLLECTION PROBLEM BEFORE A COMMUNICATION PROBLEM')}
        ${panel('THREE SOURCES, INCOMPLETE RECORDS',
          '<div class="pad">' +
          '<div class="alert"><b>FIELD / CREW REPORT</b>A radio update may describe a hold without a verified train ID.</div>' +
          '<div class="alert"><b>STATION OBSERVATION</b>A local platform or access change may remain in a separate note.</div>' +
          '<div class="alert"><b>SHARED SERVICE-DATA RECORD</b>Other employees cannot reliably use an update until the key facts are linked and verified.</div>' +
          '<a class="quick-link" href="#channels">See how operational information is collected ↗</a></div>',
          'SELECTED OPERATING EVIDENCE')}
      </div>
      <div class="home-cards">
        ${card('story','▤','Inside the Situation','Six chapters focused on fragmented real-time field and station reporting.')}
        ${card('investigations','◷','Incident Investigation Board','Six selected events; compare missing, late and complete train-level updates.')}
        ${card('people','♙','Management & Field Voices','Five views of reporting duties, missing data and verification.')}
        ${card('riders','☷','Rider Experience Records','How gaps in internal facts affect passengers and frontline employees.')}
        ${card('channels','⇄','Real-Time Information Collection','Where radio calls, local observations and shared records meet or fail to meet.')}
        ${card('documents','▧','Internal Evidence Dossier','Available records, quality indicators and management boundaries.')}
      </div>
      <div class="notice"><strong>Evidence boundary:</strong> These records are an educational simulation. A missing train-level field is evidence of a collection gap, not proof of which employee, procedure or technology caused it.</div>
    `);
  }

  function storyView() {
    return story().replace(
      'A series of seemingly ordinary rail-service incidents raises a difficult question: what does it mean to keep a traveler informed?',
      'A train delay can be reported before anyone has collected a complete, verified record of which train, stop and passengers are affected.'
    );
  }

  function peopleView() {
    return people()
      .replace('Everyone works for the same public transportation system. Not everyone sees the same problem, controls the same information, or faces the same consequences.',
        'Crews, station staff, dispatch, data analysts and communications teams observe different parts of the same train disruption.')
      .replace('Disagreements worth examining', 'Conflicting explanations for missing information')
      .replace('How soon should uncertain information be published? Who is responsible when an alert is sent but not received? Does a report that says an update was issued prove passengers understood it?',
        'Who records the train ID and affected stops? Who adds station-specific changes? Who verifies reports from the field? Is the delay caused by unclear reporting duties, missing data fields or poor system integration?')
      .replace('The review team is expected to compare perspectives rather than choose a favored department. You may need to distinguish a reasonable concern from sufficient evidence of a root cause.',
        'Compare staff perspectives and distinguish observed missing information from unproven explanations about why the record was incomplete.');
  }

  function incidentView() {
    return investigations().replace(
      'A service event can leave different traces: an operating note, a display change, an alert, a station announcement and a rider contact. Explore the chronology rather than assuming every timestamp means the same thing.',
      'Trace an initial operating report to the first complete, verified train-specific update. Public alerts and rider contacts show what happens downstream when fields are missing or late.'
    );
  }

  function channelView() {
    const pathway = [
      ['▣','Observe','Crew or station notices a change'],
      ['◈','Report','Radio, local note or structured entry'],
      ['▥','Collect','Match train ID, location and time'],
      ['✓','Verify','Authorized staff confirm the facts'],
      ['◉','Share','Shared record informs other teams']
    ].map(([i,t,s]) => `<div class="network-item"><span class="ico">${i}</span><b>${t}</b><small>${s}</small></div>`).join('');
    const rows = C.incidents.map(i => {
      const find = t => i.timeline.find(row => row[1] === t)?.[0] || '—';
      return `<tr><td><b>${esc(i.id)}</b><br><small>${esc(i.place)}</small></td>
        <td>${find('Operations log')}</td><td>${find('Field update') !== '—' ? find('Field update') : find('Station services') !== '—' ? find('Station services') : find('Control update') !== '—' ? find('Control update') : find('Dispatcher note')}</td>
        <td>${find('Verified update')}</td><td>${find('App advisory')}</td></tr>`;
    }).join('');
    return wrap(`
      ${head('How Real-Time Information Is Collected',
        'The first report, the complete internal record and the public message are different events. Trace where crucial train- or station-level facts first become available.',
        'PART IV · INFORMATION COLLECTION WORKFLOW')}
      <div class="grid-2">
        ${panel('Illustrative collection pathway',
          '<div class="network">' + pathway + '</div><p class="network-foot">A conceptual information pathway, not an official NJ TRANSIT operating or safety-control diagram. Reports may arrive in parallel.</p>')}
        ${panel('Why the data may be incomplete',
          '<div class="pad"><p>One person hears a radio report, another updates a station board, and another sees the central database. They may be working from different facts until the reports are linked to the right train and incident.</p>' +
          '<div class="alert"><b>ANALYST’S CAUTION</b>A missing field does not automatically mean someone failed to do their job. Verification may be necessary, and reporting duties may be unclear.</div></div>')}
      </div>
      <h2 class="section-heading">Selected event chronology by source</h2>
      ${panel('FIELD REPORTS AND VERIFIED RECORDS',
        '<div class="table-wrap"><table class="data-table"><thead><tr><th>Event</th><th>Initial log</th><th>Field / local report</th><th>Verified shared update</th><th>First app advisory</th></tr></thead><tbody>' +
        rows + '</tbody></table></div>',
        'READ WITH THE INCIDENT INVESTIGATION BOARD')}
      <div class="notice"><strong>Important distinction:</strong> A verified internal update can still be incomplete for a particular passenger need, and a public message can exist before all train-specific fields are known. The selected cases are illustrative, not representative.</div>
    `);
  }

  function metricsView() {
    const items = [
      ['trips','Selected train trips',v=>fmt(v)],
      ['onTime','On time (%)',v=>v.toFixed(1)+'%'],
      ['incidents','Logged significant disruptions',v=>v],
      ['verifiedLag','Median verified update lag',v=>v+' min'],
      ['within10','Complete records within 10 min (%)',v=>v+'%'],
      ['missingFields','Records needing manual follow-up',v=>v],
      ['complaints','Information-related contacts',v=>v],
      ['understood','Guidance clarity, survey (%)',v=>v+'%']
    ];
    const row = items.map(([k,t,format]) => `<tr><td><b>${esc(t)}</b></td>${C.periods.map(period=>`<td class="num">${format(period[k])}</td>`).join('')}</tr>`).join('');
    const selected = C.metrics.find(x=>x.key==='verifiedLag');
    const notes = C.notes.map(([date,observation,source])=>`<tr><td>${esc(date)}</td><td>${esc(observation)}</td><td>${esc(source)}</td></tr>`).join('');
    return wrap(`
      ${head('Real-Time Data Collection Metrics',
        'Four reporting periods show the difference between improving train punctuality and deteriorating completeness and timeliness of verified internal updates.',
        'PART VI · MANAGEMENT REPORTING')}
      <div class="grid-2">
        ${panel('Field and central-data quality report',
          '<div class="table-wrap"><table class="data-table"><thead><tr><th>Indicator</th>' +
          C.periods.map(p=>`<th class="num">${esc(p.p)}<br><small>${esc(p.dates)}</small></th>`).join('') +
          '</tr></thead><tbody>' + row + '</tbody></table></div>',
          'EXCERPT · ALL FIGURES CLASSROOM DATA')}
        ${panel('Verified data-update lag',
          '<div class="pad"><p style="font-size:12px;color:#537089">Median minutes from the initial operating log to the first complete and verified train-specific entry in the shared record.</p>' +
          spark(C.periods.map(p=>p.verifiedLag),520,210,selected.label) +
          '<p style="font-size:11px;color:#61798d">This measure does not prove which handoff or software caused the delay. Necessary safety verification is still part of the timeline.</p></div>')}
      </div>
      <h2 class="section-heading">Routine field observations</h2>
      ${panel('SELECTED COORDINATION NOTES',
        '<div class="table-wrap"><table class="data-table"><thead><tr><th>Date</th><th>Observation</th><th>Recorded by</th></tr></thead><tbody>' +
        notes + '</tbody></table></div>')}
      <div class="notice"><strong>Limitations:</strong> These aggregated periods mix different incidents and corridors. Counts of missing fields and contact volume do not establish a technical root cause. Selected incident examples are not a random sample.</div>
    `);
  }

  function documentsView() {
    return documents()
      .replace('Internal Evidence Library', 'Real-Time Data Evidence Library')
      .replace('Browse the initial documents by topic. Individual records are not a substitute for the operational source files scheduled for Upcoming.',
        'Browse field-reporting evidence by topic. Selected records help identify missing updates, but do not establish every internal reporting procedure.')
      .replace('Management Perspectives', 'Field Reporting Perspectives')
      .replace('Service and Communication Metrics', 'Real-Time Data Collection Metrics')
      .replace('Coordination Channel Notes', 'Collection and Verification Channel Notes')
      .replace('Information flow and cross-channel excerpts', 'Operational reporting, completeness and verification excerpts')
      .replace('Event-level operational dataset', 'Train-level field-reporting dataset')
      .replace('Information workflow / SOP', 'Field reporting and verification workflow / SOP');
  }

  function ridersView() {
    return riders().replace('A mix of frustration, appreciation and ordinary travel details. Selected comments can suggest hypotheses, but cannot substitute for representative rider research.',
      'Selected riders describe the effects of incomplete or mismatched train information. They show consequences, not proof of the internal cause.');
  }

  function constraintsView() {
    return constraints().replace('Any proposed improvement must work within operational, public-information and service accessibility boundaries.',
      'Administrative data-collection improvements must preserve rail safety, verified facts, staff capacity and accessible passenger information.');
  }

  return {
    home, story:storyView, people:peopleView, investigations:incidentView,
    channels:channelView, riders:ridersView, metrics:metricsView,
    documents:documentsView, constraints:constraintsView
  };
};
