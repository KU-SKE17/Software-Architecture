# Pre-final <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Microservice, Docker, Kubernetes](#microservice-docker-kubernetes)
  - [Teachers recommend part 1](#teachers-recommend-part-1)
  - [Microservice Architecture](#microservice-architecture)
    - [Domain-Driven Design](#domain-driven-design)
    - [Hexagonal Architecture](#hexagonal-architecture)
    - [Clean Architecture](#clean-architecture)
  - [Docker Containers](#docker-containers)
  - [Kubernetes](#kubernetes)
- [Blockchain](#blockchain)
  - [Teachers recommend part 2](#teachers-recommend-part-2)
- [Hadoop, MapReduce](#hadoop-mapreduce)
  - [Teachers recommend part 3](#teachers-recommend-part-3)
  - [Hadoop](#hadoop)
  - [MapReduce](#mapreduce)

## Microservice, Docker, Kubernetes

### Teachers recommend part 1

1. [(slide)](final/3%20Developing%20Microservices%20with%20Aggregates.pdf), [(1 hr)](https://www.youtube.com/watch?v=7kX3fs0pWwc) - Developing Microservices with Aggregates (by Chris Richardson)
2. Presentation by Copy Paste Engineer about DDD (ออกแบบ Microservices ด้วย Domain Driven Design)
   - [(15 mins)](https://www.youtube.com/watch?v=bRTCWUtavBs) - part 1
   - [(22 mins)](https://www.youtube.com/watch?v=cOsGRjRBNRA) - part 2
   - [(1 hr 15 mins)](https://www.youtube.com/watch?v=EBjfiuJsYe4) - part 3
3. Event-Sourcing & CQRS

### Microservice Architecture

- [(article)](https://microservices.io/) - What are microservices?
- [(article)](https://martinfowler.com/articles/microservices.html), [(26 mins)](https://www.youtube.com/watch?v=wgdBVIX9ifA) - When to change from Monolithic to Microservices
- [(slide)](final/1%20Intro%20to%20Microservices%20Architecture.pdf), [(20 mins)](https://www.youtube.com/watch?v=gfWr2_H39N0) - Introduction to Microservices Architecture
- [(slide)](final/2%20State%20of%20the%20Art%20in%20Microservices.pdf), [(1 hr 16 mins)](https://www.youtube.com/watch?v=gfWr2_H39N0) - State of the Art in Microservices (by Adrian Cockcroft)

#### Domain-Driven Design

summary -> [here!](final/ddd.md)

- Presentations by Eric Evans

  - [(56 mins)](https://www.youtube.com/watch?v=dnUFEg68ESM) - Tackling Complexity in the Heart of Software
  - [(57 mins)](https://www.youtube.com/watch?v=pMuiVlnGqjk) - What is DDD
  - [(34 mins)](https://www.youtube.com/watch?v=am-HXycfalo) - Bounded Contexts

- [(playlist)](https://www.youtube.com/playlist?list=PLZBNtT95PIW3BPNYF5pYOi4MJjg_boXCG) - Mastering the art of DDD Course

- [(48 mins)](https://www.youtube.com/watch?v=j6ow-UemzBc) - Designing Microservices the Right Way (by Michael Bryzek)

#### Hexagonal Architecture

(aka Ports and Adapters)

- [(wikipedia)](<https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)>) - what
- [(article)](https://alistair.cockburn.us/hexagonal-architecture/) - why, how
- [(article)](https://blog.octo.com/hexagonal-architecture-three-principles-and-an-implementation-example/) - three principles and an implementation example

#### Clean Architecture

- [(article)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Know what? all architectures are very similar (by by Robert C. Martin)

### Docker Containers

[(Assignment 7)](final/docker.md) - KodeKloud Course by Zezay

### Kubernetes

[(Assignment 8)](Assignments/Assignment%208%20Kubernetes%20Lab.pdf) - Screenshots of Nana Full Kubernetes Course [(3 hr 35 mins)](https://youtube.com/watch?v=X48VuDVv0do)

Pros & Cons: [(article1)](https://devspace.cloud/blog/2019/10/31/advantages-and-disadvantages-of-kubernetes), [(article2)](https://www.peerspot.com/products/kubernetes-pros-and-cons)

## Blockchain

BitCoin and Ethereum Smart Contract (decentralized app)

<!-- ? slides from DeFi and Smart Contract course -->

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

### Hadoop

a framework for store and process big data --from many channels/sources

summary -> [here!](final/hadoop.md#hadoop)

### MapReduce

a programming model (also Hadoop process method) to performs filtering, sorting, and summarizing--counting

note. for full version document by Stanford University - [slide1](https://drive.google.com/file/d/1fxRrt59MTnLhn7zvQZYxc3PGcMpx9R6o/view), [slide2](https://drive.google.com/file/d/1jR_cyLh9u9gTU3QtGMEQ0K9-bPJ8Cogb/view), [paper](https://drive.google.com/file/d/15Bd9V2gMIzZ8vXEDOjfmNG4vofdZ0M8l/view)

Why: reduce customer churn rate

How: `parallel processing`

1. have a Task
2. reduce it to many smaller tasks
3. process the smaller tasks at same time
