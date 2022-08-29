# num=int(input("enter a no"))
# i=1
# while i<=10:
#     b=(num,"*",i,"=",num*i)
#     print(b)
#     i+=1

# x = input("enter a carecter  :")
# k = "Orange"
# if x==k:
#     print("Orange")
# elif x=="@" and x=="#" or x=="&" and x=="$":
#     print("Invalid carecter")
# else:
#     print("carecter")

# num=int(input("enter a no"))
# start=0
# i=1
# while i<=num:
#     if num%i==0:
#         start+=1
#     i+=1
# if start==2:
#     print("prime no")
# else:
#     print("not  prime no")

# a = 'Hi I am here'
# b = 'am'
 
# if b in a:
#     print("String is present")
# else:
#     print("String is NOT present")


 
# a = [1, 3, 4, 5, 8, 10, 19] 
# b = a[::-1] 
# print(b)

a = [1, 3, 4, 5, 8, 10, 19]
b = []
 
for i in range(len(a) - 1 , -1, -1):
    b.append(a[i])     
print(b)
 