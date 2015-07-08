
import os
from fabric.api import env, sudo, run, local, lcd


env.roledefs = {
}

def sync():
    try:
      local('gulp')
      with lcd('build'):
        local('rsync -r --no-o --no-g --include \'*\'  ./ thoughtworks@upload.fileburst.com:www/mythoughtworks')
    except Exception, e:
        print e
        pass
