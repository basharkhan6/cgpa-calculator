import requests

data = requests.get('').json()

PROJECT_CREDIT = 6
PROJECT_GP = 4

total_credit = 0;
total_gpa = 0;

for semester in data:
    total_credit += semester['TOTAL_CREDIT']
    total_gpa += semester['TOTAL_CREDIT'] * semester['POINT_EQUIVALENT']

total_credit += PROJECT_CREDIT
total_gpa += PROJECT_CREDIT * PROJECT_GP

print(total_gpa)
print(total_credit)
print(total_gpa/total_credit)
