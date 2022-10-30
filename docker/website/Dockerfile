FROM python:3.10.4

WORKDIR /backend

COPY /backend .

RUN cd /backend && pip install -e .

EXPOSE 8000

CMD ["python3", "/backend/website/__main__.py"]