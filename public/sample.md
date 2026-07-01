# Java, Microservices, Kafka, Kubernetes, and AWS Interview Notes with Java Examples

## Java

### 1. How does ConcurrentHashMap achieve thread safety?

`ConcurrentHashMap` avoids one global lock. 

```java
import java.util.concurrent.ConcurrentHashMap;

class SafeCounter {
    private final ConcurrentMap<String, Integer> counts = new ConcurrentHashMap<>();

    void increment(String key) {
        counts.merge(key, 1, Integer::sum);
    }


}
```
