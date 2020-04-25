from django.db import models


class Section(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Topic(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Subtopic(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    code = models.TextField()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)
