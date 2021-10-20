FROM node:10

RUN npm i -g gulp
RUN wget https://github.com/ExLibrisGroup/primo-explore-devenv/archive/refs/heads/master.zip && \
	unzip master.zip  && \
	mkdir -p primo-explore-devenv-master/primo-explore/custom/41SLSP_HSG-sandbox_jfu && \
	sed -i 's/http:\/\/your-server:your-port/https:\/\/hsg.swisscovery.slsp.ch:443/g' primo-explore-devenv-master/gulp/config.js

COPY . primo-explore-devenv-master/primo-explore/custom/41SLSP_HSG-sandbox_jfu

WORKDIR /primo-explore-devenv-master

RUN npm i

ENV PORT 8003
EXPOSE 8003
CMD ["gulp", "run", "--ve", "--browserify", "--view", "41SLSP_HSG-sandbox_jfu"]