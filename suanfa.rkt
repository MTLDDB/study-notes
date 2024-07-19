#lang sicp
(define (++ a b)
  (if (= a 0)
      b
      (inc (+ (dec a) b))))
#(+ 4 5)

(define (+++ a b)
  (if (= a 0)
      b
      (+ (dec a) (inc b))))
(+ 4 5)

(define (A x y)
        (cond ((= y 0) 0)
              ((= x 0) (* 2 y))
              ((= y 1) 2)
              (else (A (- x 1)
                       (A x (- y 1))))))
(A 1 10)
(A 2 4)
(A 3 3)

(define (f n) (A 0 n))

(define (g n) (A 1 n))
(define (h n) (A 2 n))
(f 11)
(g 11)
(h 2)

(define (fib n)
  (define (fib-iter a b count)
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1))))
  (fib-iter 1 0 n)
 )

(define (fib1 n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (else (+ (fib1 (- n 1))
                 (fib1 (- n 2))))))
(fib1 1)

(fib 1)


(define (ff n)
  (if (< n 3)
      n
      (+ (ff (- n 1)) (* 2(ff (- n 2))) (* 3(ff (- n 3))))))
(ff 1)
(ff 2)
(ff 3)
(ff 4)
(ff 5)
(ff 6)
(define (fff n)
  (define (ff-iter a b c count)
   (if (= count 0)
      c
      (ff-iter (+ a (* 2 b) (* 3 c)) a b (- count 1))))
  
  (ff-iter 2 1 0 n)
  
  )
(fff 0)
(fff 1)
(fff 2)
(fff 3)
(fff 4)
(fff 5)
(fff 6)

(define (psk n)
  
  (define (psk-iter a count)
    (if (= count 0)
        a
        (psk-iter a (- count 1))))

(psk-iter 1 n)
)
(psk 2)

(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))
(gcd 40 6)

