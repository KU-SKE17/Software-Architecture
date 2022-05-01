# Domain-Driven Design <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Developing Microservices with Aggregates](#developing-microservices-with-aggregates)
  - [Problem: with Domain Models and microservices](#problem-with-domain-models-and-microservices)
  - [Solution: Overview of aggregates](#solution-overview-of-aggregates)
  - [Maintaining consistency between aggregates](#maintaining-consistency-between-aggregates)
  - [Using event sourcing with Aggregates](#using-event-sourcing-with-aggregates)
  - [Summary](#summary)
- [Presentation by Copy Paste Engineer](#presentation-by-copy-paste-engineer)

## Developing Microservices with Aggregates

[(slide)](3%20Developing%20Microservices%20with%20Aggregates.pdf), [(1 hr)](https://www.youtube.com/watch?v=7kX3fs0pWwc)

### Problem: with Domain Models and microservices

1. Domain model = tangled web of classes
   - `เวลาจะเรียกใช้ model/class/function จากอีก service -> แตก!`
2. Reliance on ACID transactions to enforce invariants, but it violates encapsulation
   - `เวลาจะเรียกใช้ database จากหลาย service ใน transation เดียว -> แตก!`
3. (No.2) also requires 2PC (transation begin-commit tags), but it is not a viable option
   - guarantees consistency, but not supported by many NoSQL databases
   - `NoSQL -> แตก!`
4. Doesn’t fit with the NoSQL DB “transaction” model

### Solution: Overview of aggregates

**Domain Driven Design** - building blocks

- Entity
- Value object
- Services
- Repositories
- `Aggregates`

**Aggregates** are

- cluster of objects that can be treated as a unit
- graph consisting of a root entity and one or more other entities and value objects
- `คิดซะว่าทุก services เป็น tables แล้ว aggregate คือ database`

Typically business entities are Aggregates (e.g. customer, Account, Order, Product, ...)

**Aggregate Rules**

1. Reference other aggregate roots via identity (primary key)
   - Domain model = collection of loosely connected aggregates
   - `ใช้ foreign keys ทำให้ model จากแต่ละ service ต่อกัน!`
2. Transaction = processing one command by one aggregate
   - Transaction scope = service
   - Transaction scope = NoSQL database “transaction”
   - `1 transaction update data ได้แค่ใน 1 service เท่านั้น (ทำ NoSQL database transaction ได้แล้ว!)`

**Aggregate Granularity**

Since an update must be atomic then it must be handled by a single aggregate, therefore aggregate granularity is important.

balancing between `Consistency` (ไม่พังง่านๆ) and `Scalability/User experience` (สะดวกแก้ --แก้หลายอันพร้อมกัน)

### Maintaining consistency between aggregates

**Question**: How to maintain data consistency
between aggregates? for example

- has 2 services (Order and Customer)
- order belongs to customer
- customer has orders

How do we connect them?

**Answer**: Use `event-driven`, eventually consistent order processing

events:

1. order create()
2. send `order created` to customer
3. customer reserveCredit()
4. customer send `credit reserved` (or `credit check failed`) to order
5. order approve() or reject()

> **Warning**: ไอ้บ้านี้ มันไม่มี rollback ต้องเขียน event เพิ่มเอง

### Using event sourcing with Aggregates

- ใช้แทน 2PC ที่แตกใน problem no.3
- App จะไม่ update database (2PC)
- App จะ publish event ไปที่ `event store`
- event store = database + msg broker
- ( = event table, event log, msg topic channel, ...)

How: The present is a fold over history

1. add event to event table
2. when want the data, re-create state (aka อ่านคำสั่งที่เคยได้รับมาทั่งหมด แล้วเชคว่า output ที่ได้คืออะไร)

Benefits: (in slide)

- Solves data consistency issues in a Microservice/NoSQL based architecture
- Reliable event publishing: publishes events needed by predictive analytics etc, user notifications,...
- Eliminates O/R mapping problem (mostly)
- Reifies state changes:
  - Built in, reliable audit log
  - temporal queries
- Preserved history: More easily implement future requirements

Drawbacks: (in slide)

- Requires application rewrite
- Weird and unfamiliar style of programming
- Events = a historical record of your bad design (WTF...)
- decisions Must detect and ignore duplicate events
  - Idempotent event handlers
  - Track most recent event and ignore older ones

### Summary

- Aggregates are the building blocks of microservices
- Use events to maintain consistency between aggregates
- Event sourcing is a good way to implement a event-driven architecture

## Presentation by Copy Paste Engineer

Youtube - ออกแบบ Microservices ด้วย Domain Driven Design

- Slides
  - [(part 1-2)](5%20Microservices%20&%20DDD%201-2.pdf)
  - [(part3)](6%20Microservices%20&%20DDD%203.pdf)
- Videos
  - [(15 mins)](https://www.youtube.com/watch?v=bRTCWUtavBs) - part 1
  - [(22 mins)](https://www.youtube.com/watch?v=cOsGRjRBNRA) - part 2
  - [(1 hr 15 mins)](https://www.youtube.com/watch?v=EBjfiuJsYe4) - part 3
- [(summary)](10%20DDD%20by%20copy%20paste%20engineer.pdf) - by Ploy
