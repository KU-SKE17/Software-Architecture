# Pre-midterm <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Frameworks Comparison (React, Vue, Svelte)](#frameworks-comparison-react-vue-svelte)
  - [React](#react)
  - [Vue](#vue)
  - [Svelte](#svelte)
  - [Scenario](#scenario)
  - [Reactive Programming](#reactive-programming)
- [Event-Driven Architecture (Apache Kafka)](#event-driven-architecture-apache-kafka)
  - [05-Event-Driven Architecture (EDA)](#05-event-driven-architecture-eda)
  - [Hand on #3](#hand-on-3)
  - [06-Apache Kafka: Event-Streaming Platform](#06-apache-kafka-event-streaming-platform)
  - [Hand on #4](#hand-on-4)
  - [Other](#other)
- [Rackspace Case Study Evolution](#rackspace-case-study-evolution)
  - [1st phase](#1st-phase)
  - [2nd phase](#2nd-phase)
  - [3rd phase](#3rd-phase)
  - [Tradeoffs](#tradeoffs)
  - [Did they proceed rationally?](#did-they-proceed-rationally)

## Frameworks Comparison (React, Vue, Svelte)

Recommended Lecture:

- (8 mins) Comparing Svelte vs React vs Vue [video](https://www.youtube.com/watch?v=LSiV8A9Zqzw&t=4s)
- (37 mins) Rethinking reactivity/Reactive programming by Rich Harris [video](https://www.youtube.com/watch?v=AdNJ3fydeao) and [slide](https://rethinking-reactivity.surge.sh)
- (29 mins) The Return of 'Write Less, Do More' by Rich Harris [video](https://www.youtube.com/watch?v=BzX4aTRPznoo)
- (20 mins) Have Single-Page Apps Ruined the Web? [video](https://www.youtube.com/watch?v=860d8usGC0o), [assignment-6](<Assignments/Assignment%206%20Have%20Single-Page%20Apps%20(SPA)%20Ruined%20the%20Web_.pdf>)

### React

use jsx

Pros:

- Easily manipulate the dom using its state
- developer community is massive
- Can almost guarantee that somebody has already solves the problem in stack exchange

Cons:

- you have to work with new language if you're used to vanilla html, css, and js
- The framework does very little support for you because goal of react is to be as lightweight and as minimalist as possible
- Many things in react are forced to do from scratch and need to import from outside library
- Routing is not done in react itself but it's come from external library called "React Router"
- Not many suggestion for new developer
- Re-rendering everything when react detected change in component.

### Vue

Pros:

- Giving us a lot of suggestions on how they want us to set up the project
  - Routing: built in natively
  - Styling: Vue giving you the suggestions on how to do it
  - Stage management: built in natively (this included animations and transitions)
- Managing state in a way that reactive
- Vue's documentation far better than react

Cons:

- Limits your versatility (forcing their own way of doing things)
- Community for Vue is much smaller than react
- If you encounter problem there might be a slight chance they've never seen before

### Svelte

Pros:

- Code can be a lot more intuitive for vanilla html, css, js developer
- When we run build its create build folder files that can be more effective to run inside of the user's browser
- Svelte is not a framework but it's a compiler so there's no baggage when build
- Documentation is very good and offer their own sandbox that you can work out of

Cons:

- Much smaller developer community than Vue and React

### Scenario

- Get a job or build enterprise level applications => React
- Something easy to learn and a lot more intuitive => Vue
- Performance is major concern for you => Svelte

### Reactive Programming

Forward referencing (update only the things that has change rather than re-rendering everything)

## Event-Driven Architecture (Apache Kafka)

### 05-Event-Driven Architecture (EDA)

- What is Event-Driven Architecture (EDA)? [here](</midterm/1%20What%20is%20Event-Driven%20Architecture%20(EDA).pdf>)
- full document: [Redhat](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture)
- APIs vs Events: Can they coexist? [slide](https://drive.google.com/file/d/1Vy6TvBy_lUcLbnR3m6r91BaaFitVVxAG/view)
- (48 mins) Apache Kafka vs Integration Middleware
  [video](https://www.youtube.com/watch?v=6yG2myKcMQE) and [slide](https://drive.google.com/file/d/1tARcT9cRQxaFaYVlRtMlse1PEJuEkH1m/view)

### Hand on #3

- Apache Kafka for Beginners: [Github](https://github.com/ZEZAY/Apache-Kafka-for-Beginners)

### 06-Apache Kafka: Event-Streaming Platform

- (2 hrs - class) Tue 2022-02-15.mp4 [slide](https://drive.google.com/file/d/1RlpQsi1Z9vHmmfCh9sFMG7hgwoneFHx8/view?usp=sharing)
- (1.5 hrs) Apache Kafka Fundamentals [classroom](https://classroom.google.com/u/1/c/NDUxNzI4OTM3MTgw/m/NDY5OTYxMzA1Nzg0/details)

### Hand on #4

- (11 mins) Kafka Streams101 [classroom](https://classroom.google.com/c/NDUxNzI4OTM3MTgw/a/NDcwMDY4OTkyNzI2/details)

### Other

- more about Confluent Streaming Event (Kafka) [here](https://www.slideshare.net/ConfluentInc/architecture-patterns-for-event-streaming-nick-dearden-confluent-london-2019-confluent-streaming-event-197648312)
- confluent.io documents for Patterns [here](https://developer.confluent.io/patterns)
- comparing Event Streaming Platforms and Technologies for EAD [here](https://solace.com/blog/comparing-event-streaming-platforms-and-tech-for-event-driven-architecture/)

## Rackspace Case Study Evolution

Rackspace Case Study: [Source](http://highscalability.com/how-rackspace-now-uses-mapreduce-and-hadoop-query-terabytes-data)

[Youtube](https://www.youtube.com/watch?v=x30DcBfCJRI) and [slide](https://drive.google.com/file/d/12eZkjSbOPRO2zZnMjADwmMpq5Q_p6SpC/view) Presentation by George Fairbanks

- Rackspace is a `Hosting provider of email service` with email log files
- Huge growth in customers, mail servers, and problems
- Task: `Troubleshoot user problem`
- Re-designs: 3 major versions (6 total versions)
  - All had the `same functionalities`
    - Hosting provider of email service
    - Email log files
  - But `different architectures`, So we can see the effect of architecture (especially on quality attributes)
  - Very expensive to build the same system 3 times

### 1st phase

- Architecture
  - CSR desktop computer
  - ssh connections to servers
  - Email Servers with Local Log Files
- Procedure
  - Write query as grep expression
  - Script runs via ssh on every server
  - Results aggregated
- Problems
  - `Automate` - Take too much of engineers scarce time
  - `Performance` - Storing and searching the logs on a live server was negatively affecting the performance of the servers

### 2nd phase

- Architecture
  - CSR desktop computer
  - Web application
  - MySQL database
  - scp log transfer
  - Email Servers with local log files
- Procedure
  - Every 10 minutes, send log files to MySQL server to delete original
  - Parse and load logs into MySQL
  - Combine new logs with old
  - Send query to MySQL server (answered from DB data)
- Problems
  - `Performance` - The LOADs would get progressively slower as the database grew
  - `Reliable` - No backups, No way to recover the missing logs (after changing log format)
  - `Scalable` - Not have a good plan for scaling the log system beyond a single monolithic server

### 3rd phase

- Architecture
  - CSR desktop computer
  - Web application
  - Distributed filesystem with Map-Reduce job cluster
  - scp log transfer
  - Email Servers with local log files
- Procedure
  - Log data continuously streamed from email servers to distributed filesystem (HDFS)
  - Every 10 minutes, Map-Reduce job runs to process log files, create index
  - Web app queries index
- Problems
  - bugs, we fix those as we find them

### Tradeoffs

- Tradeoff: `Data freshness`

  - V1: Queries run on current data
  - V2: Queries run on 10 minutes old data
  - V3: Queries run on 10-20 minutes old data

- Tradeoff: `Scalability` (server size)

  - V1: Noticeable email server slowdown (dozens of servers)
  - V2: MySQL speed/stability problems (hundreds of servers)
  - V3: No problems yet

- Tradeoff: `Ad hoc query ease`

  - V1: Regular expression
  - V2: SQL expression
  - V3: Map-Reduce program

### Did they proceed rationally?

1. Should they have done Big Design Up Front (BDUF)?

   It should be BDUF (aka waterfall). Since there may have schema/structure change during the development, cause loss of logging files.

2. Should they have evolved the architecture?

   Since their task is to troubleshoot user problem, then "Yes" they should.

   Also, there is a plan about V4, to allow customers to search/manage their own log

3. What risks did they face?

   - loss of logging files (data)
   - develop/deployment cost
   - customer satisfaction
