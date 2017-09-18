---
layout: post
title:  Solar Scorecard
date:   2017-05-11 19:54:00 -0700
image: projects/solar-icon.png
categories: projects
status: In progress
contributors:
    Ian Skor: http://sandboxsolar.com/#about
    Dominic Gendill: https://github.com/dgendill
    Jason Lampel: /registry/2016/08/11/jason-lampel
    Matthew Harris: /registry/2017/06/17/matthew-harris
github_repo: https://github.com/CodeForFoco/solar-scorecard
industry_tags:
    - Renewable Energy
    - Sustainability
    - Solar Power
    - Environment
tech_tags:
    - Website
language_tags:
    - SCSS
    - JavaScript
    - HTML
    - NodeJS
    - TypeScript
project_summary: Track Fort Collins solar/renewable energy goals
project_url: http://codeforfoco.org/solar-scorecard/
client_mission_stmt: The goal of this project is to create an up-to-date web-based data visualization tool for tracking solar contributions with respect to City of Fort Collins 2015 Climate Action Plan.
client_tagline: Track Fort Collins renewable/solar energy goals
---

### Project Details
#### Methodology
Since the Climate Action Plan goal is in terms of aggregate 2005 greenhouse gases (ghg), for our purposes we will focus only on the emissions due to electrical.  Based on [Fort Collins 2015 Community Carbon Inventory](https://www.fcgov.com/climateaction/pdf/2015-community-carbon-inventory.pdf?1494967837), we will assume that 50% of emissions are due to electrical activity.

##### Define CO2 Reference Points
In 2005, ghg emissions due to CO2 was 2.3 Million Metric Tons (mmt).  Therefore, we will assume the electrical-only emissions in 2005 were **1,150,000 mt**. Therefore, the 2020 electrical-only goal is **920,000 mt (230,000 mt reduction)**, and the 2030 electrical-only goal is **230,000 mt (920,000 mt reduction)**.

##### Convert Solar Capacity to CO2 Reduction
Based on the [EPA's Greenhouse Gases Equivalencies Calculator](https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references), we will assume that every kilowatt hour (kWh) of solar energy produced will reduce emissions by **.000703 mt**.

Using these numbers we can express the 2020, 2030, and 2050 goals in terms of the kilowatt reductions needed to meet each goal.

```
2020: 20% Reduction
230,000 mt / (.000703 mt / 1 kWh * 8760 hr) =  37,348 kW

2030: 80% Reduction
920,000 mt / (.000703 mt / 1 kWh * 8760 hr) = 149,392 kW

2050: 100% Reduction (carbon neutrality)
1,150,000 mt / (.000703 mt / 1 kWh * 8760 hr) = 186,740 kW
```

Using the [PVWatts Calculator](http://pvwatts.nrel.gov/pvwatts.php) we can calculate Fort Collins' photovoltaic system output in kWh per year.  Assuming the variables in the table below, Fort Collins' system output is **6,111 kWh/year**.  Since there are 8760 hours in a year, Fort Collins' power output is **0.6976 kW**.

| Variable | Value |
| -------- | ----- |
| DC System Size (kW) | 4 |
| Module Type | Standard |
| Array Type | Fixed (open rack) |
| System Losses (%) | 14 |
| Tilt(deg) | 20 |
| Azimuth(deg) | 180 |


#### Detailed Project Requirements
1. Create interactive, web-based, graphical depiction (chart) for each of the three emissions benchmarks mentioned above.
1. Incorporate solar power's contribution toward these goals by using publicly available photovoltaic (PV) permit data, specifically permits which have been issued to applicants requesting construction of PV facilities. Each permit contains basic PV data regarding size and quantity, which may be used as a rough estimate of how much solar energy the solar structure will provide. See [comment](https://github.com/CodeForFoco/solar-scorecard/issues/1#issuecomment-300964480) for details on viewing this data.
1. Make the tool as portable as possible so that it may be used for similar projects in other communities.
