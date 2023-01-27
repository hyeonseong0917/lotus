# Generated by Django 3.2 on 2023-01-27 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='*MAX 100*', max_length=200, verbose_name='TITLE')),
                ('author', models.CharField(max_length=100, verbose_name='AUTHOR')),
                ('content', models.TextField(verbose_name='CONTENT')),
                ('pushlished_date', models.DateTimeField(auto_now=True, verbose_name='PUBLISH_DATE')),
            ],
        ),
    ]
