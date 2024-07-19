#lang sicp


  (define (square x)
  (* x x))

  (define (cube x)
    (* x x x))

  (define (abs x)
    (cond ((> x 0) x)
          ((= x 0) 0)
          ((< x 0) (- x))))


(define (cube-root x)

  (define (good guess)
    (< (abs (- (cube guess) x)) 0.0001))


  (define (improve guess)
    (/ (+ (/ x (square guess)) (* 2 guess)) 3))
  
  (define (cube-root-iter guess)
    (if(good guess)
       guess
       (cube-root-iter (improve guess)
                     )))
  (cube-root-iter 1.0))

(cube-root 8)