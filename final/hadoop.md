# Hadoop Framework

## Big Data

5V's

- Volume: lot of data
- Velocity: many generated in high speed
- Variety: data types
- Veracity: accuracy, trustworthiness
- Value: disease detection, better treatment, reduced cost

Pro: after processed and analyzed it can benefit to predict something in advance (ex. hurricane sandy in 2012, U.S.)

## Hadoop

a framework for store and process big data --from many channels/sources

### Store

How: `HDFS` - Hadoop Distributed File System

1. [center] store all data in HDFS
2. [break down] break down to smaller size, store in multiple machines(commodity hardware)/racks
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

### Process

How: `MapReduce` (for basic version: [here!](../final.md#mapreduce))

1. input data: divided to splits
2. map(): process each split to product an output
3. shuffle and sort: grouping the outputs
4. reduce(): aggregate grouped outputs and process function to get result from each group
5. output data: combine the results together

Why: Hadoop's MapReduce

- good load balancing
- re-execution of tasks (auto when a task fails)
- simple programming model

### Management

How: `YARN`

responsible to process job requests and allocate resources by the consist of

- Resource Manage (RM) - get job requests from Client
- Node Manage (NM) - update status to RM
- Application Master (AM) - requests container from RM, and run container allocated by NM (contact NM)

Why: YARN

- job schedule
- multitenancy: available for new MapReduce version
- scalability: node can be increased

### Other System

go for it on [Youtube](https://www.youtube.com/watch?v=VmO0QgPCbZY&t=7913s)

[(summary)](11%20hadoop%20ecosystem.pdf) - by Ploy

![hadoop-ecosystem](https://i.ibb.co/Br0BFQM/hadoop.png)
