# Pre-final <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Microservice, Docker, Kubernetes](#microservice-docker-kubernetes)
  - [Teachers recommend part 1](#teachers-recommend-part-1)
  - [Microservice Architecture](#microservice-architecture)
  - [Docker Containers](#docker-containers)
  - [Kubernetes](#kubernetes)
- [Blockchain](#blockchain)
  - [Teachers recommend part 2](#teachers-recommend-part-2)
- [Hadoop, MapReduce](#hadoop-mapreduce)
  - [Teachers recommend part 3](#teachers-recommend-part-3)
  - [Big Data](#big-data)
  - [Hadoop](#hadoop)
    - [Store](#store)
    - [Process](#process)
    - [Management](#management)
    - [Other System](#other-system)
  - [MapReduce](#mapreduce)

## Microservice, Docker, Kubernetes

### Teachers recommend part 1

1. [(1 hr)](https://www.youtube.com/watch?v=7kX3fs0pWwc) - Developing Microservices with Aggregates (by Chris Richardson)
2. Presentation by Copy Paste Engineer about DDD (ออกแบบ Microservices ด้วย Domain Driven Design)
   - [(15 mins)](https://www.youtube.com/watch?v=bRTCWUtavBs) - part 1
   - [(22 mins)](https://www.youtube.com/watch?v=cOsGRjRBNRA) - part 2
   - [(1 hr 15 mins)](https://www.youtube.com/watch?v=EBjfiuJsYe4) - part 3
3. Event-Sourcing & CQRS

### Microservice Architecture

TBA <!-- TODO: สรุป -->

### Docker Containers

[(Assignment 7)](final/docker.md) - KodeKloud Course by Zezay

### Kubernetes

[(Assignment 8)](Assignments/Assignment%208%20Kubernetes%20Lab.pdf) - Screenshots of Nana Full Kubernetes Course [(3 hr 35 mins)](https://youtube.com/watch?v=X48VuDVv0do)

## Blockchain

BitCoin and Ethereum Smart Contract (decentralized app)

### Teachers recommend part 2

1. [(doc)](https://bitcoin.org/bitcoin.pdf) - The BitCoin paper (by Satoshi Nakamoto)
2. [(30 mins)](https://www.youtube.com/watch?v=BuIm2AiS9F8)- Bitkub Chain The NEXT Chapter (by ท๊อป จิรายุส)
3. [(2 hrs)](https://www.youtube.com/watch?v=ABGxeReeMAE) - เริ่มต้นเรียนรู้ Bitcoin (by อ.พิริยะ)
4. Training courses from [Zastrin](https://www.zastrin.com)
   - [(docs)](https://www.zastrin.com/courses/ethereum-primer/lessons/1-1) - The Ethereum Primer
   - [(40 mins)](https://www.zastrin.com/courses/simple-voting-vid/lessons/1-1) - Simple Voting on Ethereum

## Hadoop, MapReduce

Parallel programming

### Teachers recommend part 3

1. [(30 mins)](https://www.youtube.com/watch?v=iANBytZ26MI) - What is Hadoop?
2. [(16 mins)](https://www.youtube.com/watch?v=AZovvBgRLIY) - Apache Hadoop & Big Data 101: The Basics

### Big Data

5V's

- Volume: lot of data
- Velocity: many generated in high speed
- Variety: data types
- Veracity: accuracy, trustworthiness
- Value: disease detection, better treatment, reduced cost

Pro: after processed and analyzed it can benefit to predict something in advance (ex. hurricane sandy in 2012, U.S.)

### Hadoop

a framework for store and process big data --from many channels/sources

#### Store

How: `HDFS` - Hadoop Distributed File System

1. [center] store all data in HDFS
2. [break down] break down to smaller size, store in multiple machines/racks
   - a rack has many machines
   - a machine has many nodes
   - a node (default 128 MB) preforms read/write/store
     - name node (head): store metadata, and manage data nodes
     - data node (slave node): send signals ('heartbeats') to name node--gives its current status
3. [backup] each machine have different sets of data copy from another machines

Why: HDFS

- fault tolerant
- data security
- scalability
- flexibility (can store any data types)

#### Process

How: `MapReduce` (for basic version: [here!](#mapreduce))

1. input data: divided to splits
2. map(): process each split to product an output
3. shuffle and sort: grouping the outputs
4. reduce(): aggregate grouped outputs and process function to get result from each group
5. output data: combine the results together

Why: Hadoop's MapReduce

- good load balancing
- re-execution of tasks (auto when a task fails)
- simple programming model

#### Management

How: `YARN`

responsible to process job requests and allocate resources by the consist of

- Resource Manage (RM) - get job requests from Client
- Node Manage (NM) - update status to RM
- Application Master (AM) - requests container from RM, and run container allocated by NM (contact NM)

Why: YARN

- job schedule
- multitenancy: available for new MapReduce version
- scalability: node can be increased

#### Other System

go for it on [Youtube](https://www.youtube.com/watch?v=VmO0QgPCbZY&t=7913s)

![hadoop-ecosystem](https://i.ibb.co/Br0BFQM/hadoop.png)

### MapReduce

a programming model (also Hadoop process method) to performs filtering, sorting, and summarizing--counting

note. for full version document by Stanford University - [slide1](https://drive.google.com/file/d/1fxRrt59MTnLhn7zvQZYxc3PGcMpx9R6o/view), [slide2](https://drive.google.com/file/d/1jR_cyLh9u9gTU3QtGMEQ0K9-bPJ8Cogb/view), [paper](https://drive.google.com/file/d/15Bd9V2gMIzZ8vXEDOjfmNG4vofdZ0M8l/view)

Why: reduce customer churn rate

How: `parallel processing`

1. have a Task
2. reduce it to many smaller tasks
3. process the smaller tasks at same time
