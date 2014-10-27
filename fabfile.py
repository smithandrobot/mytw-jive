
import os
from fabric.api import env, sudo, run, local, lcd


env.roledefs = {
}

def sync():
    try:
      with lcd('build'):
        print local('ls -a');
        local('rsync -r --no-o --no-g --include \'*\' --exclude \'.*\' ./ thoughtworks@upload.fileburst.com:www/mythoughtworks')
    except Exception, e:
        print e
        pass
