# Midterm <!-- omit in toc -->

## Course Description <!-- omit in toc -->

- Software Quality Attributes (aka NFRs)
- Software Architecture Process
- Software Architecture Documentation
- Architectural/Design Patterns

## Table of Contents <!-- omit in toc -->

- [Big Picture](#big-picture)
- [Software Architecture](#software-architecture)
- [Architectural Patterns](#architectural-patterns)
  - [How does it fit in the big picture?](#how-does-it-fit-in-the-big-picture)
  - [Architectural Patterns vs Design Pattens](#architectural-patterns-vs-design-pattens)
  - [Two Levels of Classification](#two-levels-of-classification)
  - [Layered Patterns](#layered-patterns)
  - [Microservice Patterns](#microservice-patterns)
  - [Event-Driven Patterns](#event-driven-patterns)
  - [MicroKernel Patterns](#microkernel-patterns)
  - [Service-Oriented Patterns](#service-oriented-patterns)
  - [Space-based Patterns](#space-based-patterns)
- [Intro to Software Architecture](#intro-to-software-architecture)
- [Evolution of Web Architecture](#evolution-of-web-architecture)
  - [Web 1.0](#web-10)
    - [Requirements](#requirements)
    - [libWWW Architecture](#libwww-architecture)
  - [Web 2.0](#web-20)
    - [New requirements](#new-requirements)
    - [AWS Architecture](#aws-architecture)
  - [Web 3.0](#web-30)
    - [Challenges](#challenges)
- [Cloud Computing](#cloud-computing)
- [Intro to AWS Service](#intro-to-aws-service)
- [Enterprise vs System Architecture](#enterprise-vs-system-architecture)
  - [Enterprise Architecture (EA)](#enterprise-architecture-ea)
  - [System Architecture](#system-architecture)
  - [Where does Software Architecture Fit?](#where-does-software-architecture-fit)
- [Architectural Structure](#architectural-structure)
  - [3 View Types of Architectural Structure](#3-view-types-of-architectural-structure)
    - [Module Structures](#module-structures)
    - [Component-and-Connector Structure (C&C Structure)](#component-and-connector-structure-cc-structure)
    - [Allocation Structure](#allocation-structure)
- [Quality Attributes (QA)](#quality-attributes-qa)
  - [Quality Attributes & Architecture](#quality-attributes--architecture)
  - [Quality Attributes Scenario](#quality-attributes-scenario)
    - [Concrete Scenarios](#concrete-scenarios)
    - [General Scenarios](#general-scenarios)
- [Tactics](#tactics)

## Big Picture

- Building software is not just coding.
- The design output is the input of the development phase

Dev Life Cycle

1. Requirements Engineering
2. Analysis
3. Design/Architecture
   - Architectural Pattens
   - Quality Attributes
   - Messaging Mechanisms
   - APIs
4. Development (coding)
   - Coding Paradigms
   - Design Pattens
   - Tooling
   - Automation
5. Testing
6. Acceptance
7. Deployment
8. Maintenance and Update (most of time)

## Software Architecture

[Slide] Software Architecture is `how` the defining components of a software system are `organized` and `assembled`. How they communicate with each other. And the constraints `the whole system is ruled by`.

[Book] The software architecture of a system is the set of structures needed `to reason about the system`, which comprise `software elements`, `relations` among them, and `properties` of both.”

loop:

- Architectural Patterns: defining components
- Messaging and APIs: communicate with each other
- Quality Attributes: constraints the whole system is ruled by

## Architectural Patterns

`Architectural Patterns` is design big picture of the overall structure of the system. It define the `granularity` of the components.

(slide week5) see patterns as solutions to a number of common problems in software design

note. granularity - how small/big the component should be

### How does it fit in the big picture?

Good Architectural Patterns -> Good decision in the development phase -> Good Design Pattens

### Architectural Patterns vs Design Pattens

Architectural Patterns

- overall
- high-level, universal scope
- how components are organized and assembled
  - how many components
  - what are relationship btw those components
  - (what protocol, what framework, ...)

Design Pattens

- coding level
- low-level
- how components are built

### Two Levels of Classification

| L1  | Monolithic    | Service-based      | Distributed    |
| :-- | :------------ | :----------------- | :------------- |
| L2  | `Layered`     | `Microservice`     | `Event-Driven` |
|     | `MicroKernel` | `Service-Oriented` | `Space-based`  |

### Layered Patterns

- (aka N-tier pattern)
- `Separation of Concerns`
- Layers as major components
- Low Capering -> reduce dependency -> easier to change/modify
- High Cohesion (ขนาดเล็ก ต่อกันเยอะๆ)
- ทำเป็น api มาต่อๆกัน (normally -> uni-direction)

### Microservice Patterns

- `NOT` Service-Oriented Architecture
- `Independent`, Evolvable, and Deployable Unit
- Spite Software to Small Services
- มีหลายๆ server, deploy แยกกัน, แล้วรวมกันด้วย API Gateway

### Event-Driven Patterns

- Event Process unit coordinated in a `Mediator` or `Broker` topology
- Asynchronous nature (ส่งงานไป, ทำเสร็จล่ะบอกนะ, หรือจะเข้ามาดูก้ได้)
- Overall Structure depend on the topology chosen
- Server/Drive that use a syncopated communication (ex. nodeJS)

### MicroKernel Patterns

- (aka Plug-in pattern)
- Major components:
  - Core System (like a Kernel) - minimal func.
  - Plug-ins (to add on functions)
- ex. browsers, IDE, OSs

### Service-Oriented Patterns

- (Old) Large, Enterprise system
- Coarse-grained service
- Integrating different heterogeneous components together
- There are many implementations of the pattern
- เชื่อม Server เก่า-ใหม่ ด้วยการเพิ่ม enterprise/service hubs

### Space-based Patterns

- Hybrid of Architectural patterns
- Inspired by Space tuples
- Distribute caching (Middleware)
  - in Memory Data Grid (solid state == share memory)
  - Larger, Cheaper -> more hit
- Elastic scalable patterns
- เอาทุกอย่างใส่ solid state -> share many process units
- (have multi process units running in parallel in same app)
- Improve Scalability

## Intro to Software Architecture

George Fairbanks's [lecture](https://www.youtube.com/watch?v=x30DcBfCJRI), [slide](https://drive.google.com/file/d/12eZkjSbOPRO2zZnMjADwmMpq5Q_p6SpC/view)

[Assignment 1](Assignments/Assignment%201%20Basic%20Concepts%20of%20Software%20Architecture.pdf)

## Evolution of Web Architecture

### Web 1.0

- by Tim Berners-Lee, 1990
- Static Web/Read-only Web
- HTML, URL, HTTP
- (date) server -> internet -> clients

#### Requirements

1. Provide remote access across networks
   - Any information had to be accessible from any machine on the CERN network.
2. Support heterogeneity
   - The system could not be limited to specific software, a piece of hardware, or an operating system.
3. Avoid centralized control of the system
4. Support access to existing data and databases
5. Support private links to data and databases
6. Display on 24 X 80 character ASCII terminal
   - At the inception of the Web, using graphics was optional.
7. Support data analysis
   - Let users search across various data sources to look for anomalies, regularities, irregularities, and so forth.
8. Support live links

   - Given that information changes all the time, there must be some way of updating a user's view of it.

9. Platform Portable (Quality Attributes)

   - Allows different Hardwares, OSs

10. Scalable/Extensible (Quality Attributes)

    - Allows add/remove user
    - Support emerging Hardwares and OSs
    - Allows capacity for servers and data extended

#### libWWW Architecture

[Assignment 2](/Assignments/Assignment%202%20Layered%20Architecture%20of%20libWWW.pdf)

### Web 2.0

- staring around 2000’s
- Read-Write Web
- Internet for Information Exchange Era
- `Problems`: Centralized Database/Centralized Ownership (by Big Companies)

#### New requirements

- Interactive Web Technology
  - e-commerce website
  - social media app
  - etc.
- High performance
  - low latency, no requests refuse
- High availability
  - available 24/7
- Scalability
- Security
- Modifiability

#### AWS Architecture

[Assignment 3](/Assignments/Assignment%203%20Introduction%20to%20AWS%20Services.pdf)

### Web 3.0

- the next generation
- Read-Write-Own Web
- A new era of the Internet for Value Exchange
- Decentralized App (Dapp)
- `Solved`:
  - Change from Sever Database to Blockchain
  - Decentralized Database/Decentralized Ownership
  - keep consistent and immutable ledgers of transactions in multiple blockchain nodes

#### Challenges

- Scalability
- Slow Transactions Speed
- Fees (gas fees on Ethereum is expensive)
- Usages are still complicated

## Cloud Computing

Cloud computing is the on-demand availability of `computer system resources`, especially `data storage` and `computing power`, without direct active management by the user.

Cloud Service Types

| Service     | IaaS | PaaS | SaaS |
| :---------- | :--: | :--: | :--: |
| Application |  x   |  x   | yes  |
| Data        |  x   |  x   | yes  |
| Middleware  |  x   | yes  | yes  |
| OS          |  x   | yes  | yes  |
| Server      | yes  | yes  | yes  |
| Storage     | yes  | yes  | yes  |
| Networking  | yes  | yes  | yes  |

`yes` -> Cloud Providers Manage

`x` -> Cloud Customer Manage

3 Major Cloud Providers

- AWS
- Azure
- Google Cloud

## Intro to AWS Service

[Assignment 3](Assignments/Assignment%203%20Introduction%20to%20AWS%20Services.pdf)

![fb.com on aws](Assignments/Assignment%203%20A%20Solution%20Archiecture.png)

## Enterprise vs System Architecture

### Enterprise Architecture (EA)

Enterprise Architecture is a means for describing `business structures and the processes` that connect them.

### System Architecture

A system architecture is a means for describing the elements and interactions of a complete system including `its hardware and software elements`.

Be able to tell:

- The system consists of many elements?
- The elements interact with each other over various networks?
- Some of the elements represent layers and their relationships to one another?
- The applications involved and the elements they comprise?
- What is the significance of their separation?
- Do they exist at runtime?
- Are they processes, programs, or hardware?
- What are the responsibilities of the elements?
- What is the significance of the connections between the elements?
- etc.

### Where does Software Architecture Fit?

Enterprise Architecture (EA) and System Architecture provide an environment in which software lives.

- Both provide `requirements` and `constraints` to which software architecture must adhere to
- Elements of both are likely to contain software architecture

A software architecture is often depicted using `an ad hoc box-and-line` drawing of the system that is intended to solve the problems articulated by the specification.

- Boxes show elements or `“parts”` of the system.
- Lines show `relationships` among the parts.

## Architectural Structure

[checkout slide](http://mustafagonul.com/architecture/2019/12/26/saip-01-01.html)

Architects must focus on whatever structures will provide them with the most leverage in achieving the desired quality attributes of a system.

Why is Software Architecture important?

1. It provides a vehicle for communication among stakeholders.
2. It is the manifestation of the earliest design decisions about a system.
3. It is a transferable, reusable abstraction of a system.

Architectures are influenced by (slide week4 p.16-17)

1. System stakeholders
2. The development organization’s business environment
3. The technical environment
4. The architect’s professional background and experience.

### 3 View Types of Architectural Structure

![table 1.1](http://mustafagonul.com/assets/2019-12-26-saip-01-01/01tab01.jpg)

#### Module Structures

consisting of elements that are units of implementation called `modules` and the `relationships` among them.

Units of Implementation:

- Uses
- Decomposition
- Layered
- Class/Generalization
- etc.

#### Component-and-Connector Structure (C&C Structure)

consisting of `runtime components` (units of computation) and the `connectors` (communication parts) between them.

Units of Computation:

- Client-Server
- Concurrency
- Process
- Share-Data
- etc.

#### Allocation Structure

consisting of `software elements` and their relationships to elements in external environments in which the software is `created` and `executed`.

Units of Allocation

- Work Assignment
- Deployment
- Implementation
- etc.

## Quality Attributes (QA)

Stakeholders Concerns -> Quality Attributes Requirements

- properties of work products or goods by which `stakeholders judge their quality`
- not only the functional specifications but are also the `important requirements` of a software
- should be defined clearly without ambiguity
  - specified with `concrete` (measurable) scenarios

Examples: (slide week4 p.28-34, 45-49)

- Availability (numbers of nine, downtime/day, /year)
- Interoperability (correct info included of time)
- Modifiability (change made and unit tests/duration)
- Performance (transactions/avg latency)
- Security (audit trail)
- Testability (% coverage)
- Usability (productive/duration)
- Accessibility
- Scalability
- Elasticity
- Reliability
- Calibrateability
- Webifyability
- Throughput
- Configurability
- Subsetability
- Reusability
- Variability (a special form of modifiability)
- Portability
- Development Distributivity
- Deployability
- Mobility (dealing with movement and affordability, e.g. battery management)
- Monitorability
- Safety

### Quality Attributes & Architecture

- The degree to which a software system meets its QA `requirements` depend on its `architecture`.
- Architectural `decisions` are made to promote various quality `attributes`.
- A `change` in an architecture to promote one quality often `affects other QA`.

### Quality Attributes Scenario

to describing QAs using names by themselves are `not` enough. A solution to the problem of describing QAs is to use `QA scenarios` to clearly characterize them.

Quality Attribute Scenarios

A short description of how a system is required to respond to some stimulus. Contains 6 parts following:

1. `Source` – an entity that generates a stimulus
2. `Stimulus` – a condition that affects the system
3. `Artifacts` – the part of the system that was stimulated by the stimulus
4. `Environment` – the condition under which the stimulus
   occurred
5. `Response` – the activity that results because of the stimulus
6. `Response Measure` – the measure by which the system’s
   response will be evaluated.

#### Concrete Scenarios

QA scenarios that are `created for a specific system`.

ex. An unanticipated external message (slide week4 p.35)

#### General Scenarios

General scenarios are `system-independent scenarios`
that allow stakeholders to communicate more effectively
about QA requirements and can assist
stakeholders in developing concrete scenarios.

ex. Availability (slide week4 p.36-40)

[Assignment 4](/Assignments/Assignment%204%20Specifying%20Quality%20Attributes%20of%20an%20E-Commerce%20Web%20Application.pdf)

## Tactics

- These `decisions` are called `tactics`
  - Collection of design decisions from SA
  - Decisions made to achieve the system’s functional requirements
  - Decisions made to ensure the system’s QA requirements
- It influential in `controlling QA responses`
- `building blocks` of design from which patterns are created

Stimulus -> (Tactics to Control Responses) -> Responses

ex. Tactics for Availability (slide week4 p.55-62), others (p.64-69)

[Assignment 5](Assignments/Assignment%205%20Applying%20Tactics%20to%20Achieve%20Quality%20Attributes.pdf)
